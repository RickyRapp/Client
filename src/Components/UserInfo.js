import React from "react";
import DropDownNew from './DropDownNew';
import RestaurantDetailsUser from "./RestaurantDetailsUser";
import RestaurantMap from "./RestaurantMap";

const UserInfo = () => {
    return(
        <div>
        <div>Welcome! Please choose a category to view the list of restaurants!</div><br />
        <DropDownNew /><br />
        <RestaurantMap /><RestaurantDetailsUser /> 
        </div>
    )
}

export default UserInfo;