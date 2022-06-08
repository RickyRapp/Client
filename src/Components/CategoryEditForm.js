import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';  
import { setCategory, updateCategories } from '../actions'; 
import axios from 'axios';

const CategoryEditForm = props => {
     
    const currentCategoryName = props.currentCategory.categoryName
  //  console.log(currentCategoryName)
    const [showButton, setShowButton] = useState(true);
    const [category, setNewCategory] = useState("");
    const [message, setMessage] = useState("");  
    const dispatch = useDispatch()

    useEffect(()=>{
      setNewCategory(currentCategoryName)
    },[currentCategoryName]) 

    const handleSubmit = async e => {
          e.preventDefault();
          const categoryName = {category}
          const id=props.currentCategory.id 
        
          const newCategory = await fetch(`http://localhost:3001/categories/editCategory/${id}`, {
          method:'PATCH',
          //headers: {"accepts":"application/json"},
            headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
          body: JSON.stringify(categoryName) 
    })
     try{
            //await newCategory();
            setNewCategory(""); 
            setMessage("updated successfully");
            setShowButton(true)
            const response = await axios
            .get('/categories/getCategories') 
            .catch((err) => {
                console.log("err",err)
            }) 
            dispatch(setCategory(response.data)); 
           // props.getCategories(); 
        } 
        catch (err){
            setMessage(`There was an issue: ${err}`);
        }
          

      }
    
    return(
        <div>
            {showButton ? 
            <button className="ui button" onClick={()=> setShowButton(false) }>Edit Category</button>
            :
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setNewCategory(e.target.value)}
                type="text"
                name="category"
                value={category}
                placeholder="Name"  
                className="ui input"
                />
                <button type="submit" className="ui button">Save</button>
                <button className="ui button" onClick={()=> setShowButton(true) }>Cancel</button> 
            </form>
            }
            {message}
        </div>
    )}

    
    const mapStateToProps = state => {
        return {
          currentCategory: state.currentCategory
        } 
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            updateCategory: () => dispatch(updateCategories())
          }          
    }

    export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditForm);

