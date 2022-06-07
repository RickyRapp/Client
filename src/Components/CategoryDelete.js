import React, {useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'; 
import { actionTypes } from '../actions/Action-types';

const CategoryAddForm = () => {
    
    const [showButton, setShowButton] = useState(true);
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState(""); 

    const handleSubmit = e => {
          e.preventDefault();
          const categoryId = {category}
        try{
            fetch('/categories/deleteCategory/', {
            method:'DELETE',
           // headers: {"content-type":"application/json"},
          //  body: JSON.stringify('test') 
          }).then(() => {
            setCategory(""); 
            setMessage("Created successfully");
          })
        }
        catch (err){
            setMessage(`There was an issue: ${err}`);
        }
          

      }
    
    return(
        <div> 
            <button className="ui button">Delete Category</button>
             
            {message}
        </div>
    )}



    export default (CategoryAddForm);

