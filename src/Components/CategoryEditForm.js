import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';  
import { getCategories, addCategory, updateCategories } from '../actions'; 

const CategoryEditForm = props => {
     
    const currentCategoryName = props.currentCategory.categoryName
  //  console.log(currentCategoryName)
    const [showButton, setShowButton] = useState(true);
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");  

    useEffect(()=>{
        setCategory(currentCategoryName)
    },[currentCategoryName]) 

    const handleSubmit = async e => {
          e.preventDefault();
          const categoryName = {category}
          const id=props.currentCategory.id
          console.log(categoryName)
          console.log(id)
        
          const newCategory = await fetch(`http://localhost:3001/categories/editCategory/${id}`, {
          method:'PATCH',
          //headers: {"accepts":"application/json"},
            headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
          body: JSON.stringify(categoryName) 
    })
     try{
            //await newCategory();
            setCategory(""); 
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
            <button className="ui button" onClick={()=> setShowButton(false) }>Edit Category</button>
            :
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setCategory(e.target.value)}
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

