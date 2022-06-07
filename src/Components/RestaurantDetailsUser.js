import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'; 

const RestaurantDetailsUser = props=> {
    console.log("here")
    const [showButton, setShowButton] = useState(true);
    const [name, setName] = useState(""); 
    const [date, setDate] = useState("");
    const [message, setMessage] = useState(""); 

    const handleSubmit = async e => {
        e.preventDefault();
        const newReservationName = name
        const newReservationDate = date
        const newReservationRestaurantNum = props.currentRestaurant.restaurantNum
        const newReservationInfo =  {
          newReservationName,
          newReservationDate,
          newReservationRestaurantNum 
       };   

       if(newReservationRestaurantNum===''){ 
           return;
       }
      
        const newBooking = await fetch(`/bookings/addBooking`, {  
        method:'POST',
        headers: {"content-type":"application/json"}, 
      //  headers: {"accepts":"application/json"}, 
        body: JSON.stringify({          newReservationName,
            newReservationDate,
            newReservationRestaurantNum }) 
  })
   try{ 
          setName(""); 
          setDate("");  
          setMessage("updated successfully");
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
                <button onClick={()=> setShowButton(false) }>Add a booking!</button>
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
                    <input onChange={(e) => setDate(e.target.value)}
                    type="text" 
                    value={date}
                    placeholder="Date" 
                    />
                </div> 
                <button type="submit">Save</button>
                <button onClick={()=> setShowButton(true) }>Cancel</button> 
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