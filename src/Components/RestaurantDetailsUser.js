import React, {useState} from 'react';
import {connect} from 'react-redux'; 
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 

const RestaurantDetailsUser = props=> { 
    const [showButton, setShowButton] = useState(true);
    const [name, setName] = useState("");  
    const [startDate, setStartDate] = useState(new Date());
   // const [message, setMessage] = useState(""); 

    const handleSubmit = async e => {
        e.preventDefault();
        const newReservationName = name
        const newReservationDate = startDate
        const newReservationRestaurantNum = props.currentRestaurant.restaurantNum


       if(newReservationRestaurantNum===''){ 
           return;
       }
      
        const newBooking = await fetch(`/bookings`, {  
        method:'POST',
        headers: {"content-type":"application/json"}, 
      //  headers: {"accepts":"application/json"}, 
        body: JSON.stringify({ 
            newReservationName,
            newReservationDate,
            newReservationRestaurantNum }) 
  })
   try{ 
          setName(""); 
          setStartDate("");  
        //  setMessage("updated successfully");
          setShowButton(true) 
      } 
      catch (err){
          console.log(`There was an issue: ${err}`);
      }
        

    }
    console.log(props)
    return(
        <div>
            <h3>Restaurant Details</h3>
            <p>
                Name:{props.currentRestaurant.name}<br />
                Address:{props.currentRestaurant.address}
            </p> 
            <testStuff />
            <React.Fragment>
                {showButton ? 
                <button className="ui button" onClick={()=> setShowButton(false) }>Add a Booking!</button>
                :
                <form onSubmit={e => handleSubmit(e)}>
                 <div>
                    <input onChange={(e) => setName(e.target.value)}
                    type="text" 
                    value={name}
                    placeholder="Name" 
                    />
                </div>
                <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> 
               
                </div> 
                <button className="ui button" type="submit">Save</button>
                <button className="ui button" onClick={()=> setShowButton(true) }>Cancel</button> 
                </form> 
                }
            </React.Fragment>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentRestaurant: state.currentRestaurant
    }
};

export default connect(mapStateToProps)(RestaurantDetailsUser); 
//export default (RestaurantDetails); 