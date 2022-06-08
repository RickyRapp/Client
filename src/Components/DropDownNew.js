import React from "react";
import CategoryDropDown from "./CategoryDropdown";  
import RestaurantDropdown from './RestaurantDropdown' 

const DropDownNew = () => { 
    return (
        <div style={{textAlign:"center"}}>
            <CategoryDropDown />
            <RestaurantDropdown />
        </div>
    )
}
 

export default DropDownNew;