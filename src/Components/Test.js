import axios from "axios";
import React from "react";
 

const  testStuff = async() => {
  
    const res = await axios('http://localhost:3001/categories');
    return await res.json(); // (Or whatever) 
}

export default testStuff ;