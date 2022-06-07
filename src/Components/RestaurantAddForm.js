import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';  
import { updateRestaurant} from '../actions'; 

const RestaurantAddForm = props => {
     
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
   // const currentRestaurantName = props.currentRestaurant
  //  console.log(currentCategoryName)
    const [showButton, setShowButton] = useState(true);
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantAddress, setRestaurantAddress] = useState("");
    const [associatedCategory, setAssociatedCategory] = useState("");
    const [message, setMessage] = useState("");  


    console.log(associatedCategory)
    const handleSubmit = async e => {
          e.preventDefault();
          const newRestaurantName = {restaurantName}
          const newRestaurantAddress = {restaurantAddress}
          const newAssociatedCategory = {associatedCategory}
          const newRestaurantsInfo =  {
            'newRestaurantAddress'  :    newRestaurantAddress,
            'newAssociatedCategory' :    newAssociatedCategory,
            'newRestaurantName'     :    newRestaurantName 
         };  
         console.log(newAssociatedCategory)
        
          const newRestaurant = await fetch(`/restaurants/addRestaurant`, { 
         // headers: {"accepts":"application/json"},
          method:'POST',
          headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
          //  headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
         // body: JSON.stringify(newRestaurantsInfo) 
          body: JSON.stringify({newRestaurantsInfo}) 
    })
     try{
            //await newCategory();
            setRestaurantName(""); 
            setRestaurantAddress("");  
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
            <button className="ui button" onClick={()=> setShowButton(false) }>Add Restaurant</button>
            :
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e) => setRestaurantName(e.target.value)}
                    type="text" 
                    value={restaurantName}
                    placeholder="Restaurant Name"  
                    className="ui input"
                    />
                </div>
                <div>
                    <input onChange={(e) => setRestaurantAddress(e.target.value)}
                    type="text" 
                    value={restaurantAddress}
                    placeholder="Address"  
                    className="ui input"
                    />
                </div>
                <div>
                    <select onChange={e=>{setAssociatedCategory(e.target.value)}}>
                        {setOption}
                    </select>
                </div>
                <button className="ui button" type="submit">Save</button>
                <button className="ui button" onClick={()=> setShowButton(true) }>Cancel</button> 
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

    export default connect(mapStateToProps, mapDispatchToProps)(RestaurantAddForm);

