import React, {useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'; 
import { getCategories, addCategory } from '../actions'; 

const CategoryAddForm = props => {
    
    const [showButton, setShowButton] = useState(true);
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState(""); 
    const dispatch = useDispatch();

    const handleSubmit = async e => {
          e.preventDefault();
          const categoryName = {category}
          console.log(categoryName)
        
            const newCategory = await fetch('http://localhost:3001/categories/addCategory', {
            method:'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(categoryName) 
    })
     try{
            //await newCategory();
            setCategory(""); 
            setMessage("Created successfully");
           // props.getCategories(); 
        } 
        catch (err){
            setMessage(`There was an issue: ${err}`);
        }
          

      }
    
    return(
        <div>
            {showButton ? 
            <button className="ui button" onClick={()=> setShowButton(false) }>Add a Category</button>
            :
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setCategory(e.target.value)}
                type="text"
                name="category"
                value={category}
                placeholder="Name"  
                className="ui input"
                />
                <button  className="ui button" type="submit">Save</button>
                <button className="ui button" onClick={()=> setShowButton(true) }>Cancel</button> 
            </form>
            }
            {message}
        </div>
    )}

    
    const mapDispatchToProps = dispatch => {
        return {
          getCategories: () => dispatch(getCategories())
        } 
    }
    export default connect(null, mapDispatchToProps)(CategoryAddForm);

