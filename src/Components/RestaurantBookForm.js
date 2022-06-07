import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';  
import { updateRestaurant} from '../actions'; 

const RestaurantBookForm = props => {
     
    const setOption = (props.categories).map((category) => {
        //console.log(option.selected)
        return (
            <option 
                //onChange={() => option.onSelectedChange(option)} 
                //onClick={()=>onSelectChange(option)} 
                value={category.categoryNum}
                //id={category._id}
                key={category._id}
                >
                {category.categoryName}
            </option>
        )
    })
  //  console.log(props)
    const currentRestaurantName = props.currentRestaurant
  //  console.log(currentCategoryName)
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
             console.log('stopping')
             return;
         }
        
          const newBooking = await fetch(`/bookings/addBooking`, { 
         // headers: {"accepts":"application/json"},
          method:'POST',
          headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
          //  headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
         // body: JSON.stringify(newRestaurantsInfo) 
          body: JSON.stringify({ newReservationName,newReservationDate,newReservationRestaurantNum }) 
    })
     try{
            //await newCategory();
            setName(""); 
            setDate("");  
            setMessage("updated successfully");
            setShowButton(true)
           // props.getCategories(); 
        } 
        catch (err){
            setMessage(`There was an issue: ${err}`);
        }
          

      }
    
    return(
        <div>
            {showButton ? 
            <button onClick={()=> setShowButton(false) }>Add a reservation!</button>
            :
            <form onSubmit={handleSubmit}>
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
            {message}
        </div>
    )}

    
    const mapStateToProps = state => {
        return {
           currentRestaurant: state.currentRestaurant,
           categories: state.categories.categories ,
        } 
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            updateRestaurant: () => dispatch(updateRestaurant())
          }          
    }

    export default connect(mapStateToProps, mapDispatchToProps)(RestaurantBookForm);

