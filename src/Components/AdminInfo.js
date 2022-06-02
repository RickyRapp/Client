import React from "react"; 
import DropDownNew from './DropDownNew';
import RestaurantDetailsUser from "./RestaurantDetailsUser";
import RestaurantMap from "./RestaurantMap";
import RestaurantDetailAdmin from "./RestaurantDetailAdmin";
 
const AdminInfo = () => {
    return(
        <div>
        <div>Welcome! Please use the buttons below to add/edit categories and restaurants.</div>
        <DropDownNew /><br />
        <RestaurantMap /><RestaurantDetailAdmin /> 
        </div>
    )
}

export default AdminInfo;