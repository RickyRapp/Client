import React, {useState} from "react";
import CategoryAddForm from "./CategoryAddForm"; 
import CategoryDelete from "./CategoryDelete";  
import CategoryEditForm from './CategoryEditForm';
import {connect, useDispatch} from 'react-redux';
import {removeCategory, selectCategory, getCategories, removeSelectedCategory, deleteCategories} from '../actions'
import axios from "axios";

const CategoryOptions = props => {
    const dispatch = useDispatch();
    const [showCategoryAddButton, setshowCategoryAddButton] = useState(true)
    const [showCategoryViewButton, setshowCategoryViewButton] = useState(true)
    
    const deleteCategory = async id => { 
      try{
        const response = await axios
        .try(
            delete(`/categories/deleteCategory/${id}`) ,
            dispatch(removeSelectedCategory(id)),
            dispatch(getCategories())
        ) 
        .catch((err) => {
            console.log("err",err)
        })
       // dispatch(setCategory(response.data));
      }
      catch (err){
          console.log(`There was an issue: ${err}`);
      }
        

    }

    console.log(props.selectedCategory)
    function AdminOptions(){
    return(
        <div>
            category options:
            <br />
            <br />
            <CategoryAddForm />
            {
            !props.selectedCategory?
            '':
            <div>
                <br />
                <button className="ui button" onClick={()=> deleteCategories(props.selectedCategory.id)}>Delete Category</button> 
                <br />
                <br />
                <CategoryEditForm />
            </div>
            }
        </div>
    )
   }
   return AdminOptions();
}

const mapDispatchToProps = state => ({ 
    selectedCategory:state.currentCategory
})
export default connect(mapDispatchToProps, {selectCategory})(CategoryOptions)

//export default CategoryOptions;