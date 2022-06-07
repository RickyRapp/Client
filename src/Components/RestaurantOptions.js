import React, {useState} from "react";
import CategoryAddForm from "./CategoryAddForm"; 
import CategoryDelete from "./CategoryDelete";  
import CategoryEditForm from './CategoryEditForm';
import {connect, useDispatch} from 'react-redux';
import {selectRestaurant , deleteRestaurant, deleteCategories} from '../actions'
import axios from "axios";
import RestaurantAddForm from "./RestaurantAddForm";
import RestaurantEditForm from "./RestaurantEditForm";

const RestaurantOptions = props => {
    const dispatch = useDispatch();
    const [showCategoryAddButton, setshowCategoryAddButton] = useState(true)
    const [showCategoryViewButton, setshowCategoryViewButton] = useState(true)
 
    function AdminOptions(){
    return(
        <div>
            Restaurant Options:
            <br />
            <br />
            <RestaurantAddForm />
            {
            !props.selectedRestaurant?
            '':
            <div>
                <br />
                <button className="ui button" onClick={()=> deleteRestaurant(props.selectedRestaurant.id)}>Delete Restaurant</button> 
                <br />
                <br />
                <RestaurantEditForm />
            </div>
            }
        </div>
    )
   }
   return AdminOptions();
}

const mapDispatchToProps = state => ({ 
    selectedRestaurant:state.currentRestaurant
})
export default connect(mapDispatchToProps, {selectRestaurant})(RestaurantOptions)

//export default CategoryOptions;