import React, {useEffect, useState} from 'react';   
import CategoryOptions from './CategoryOptions';
import {  useDispatch, connect } from 'react-redux'; 
import axios from 'axios';
import { setCategory, selectCategory } from '../actions'; 

const CategoryDropDown = props =>  { 
    const dispatch = useDispatch(); 
    const getCategories = async () => {
        console.log("got to the function")
        const response = await axios
        .get('http://localhost:3001/categories/getCategories') 
        .catch((err) => {
            console.log("err",err)
        }) 
        dispatch(setCategory(response.data));
    }
    useEffect(() => {
    //    console.log("calling the function now")
        getCategories()
        console.log("calling the function now")
    },[]) 
   
    console.log(props.categories)
    const setOption = (props.categories).map((category) => { 
        return (
            <option  
                value={category.categoryNum}
                id={category._id}
                key={category._id}
                >
                {category.categoryName}
            </option>
        )
    })
    return ( 
        <div>
            <label>Select a Category</label>
            <select  onChange={e =>props.selectedCategory(e) } >
                <option value="0">Select One</option>
                {setOption}
            </select> 
            {props.currentLoggedInAs==='admin'?<CategoryOptions />:'' }
            <br />

        </div>
    )
}

const mapStateToProps = state => ( 
    {  
        categories: state.categories.categories ,
        setCategory : {setCategory},
        selectedCategoryNum : state.currentCategory  ,
        currentLoggedInAs : state.currentLoggedInAs  
});

const mapDispatchToProps = (dispatch) => ({

    /*@yossi: The below function is getting different details from the selected option which I'm storing 
    in the state. I know this is not the best way to do this - is there another way? */
     
      selectedCategory: e => {  
        const id=e.target.childNodes[e.target.selectedIndex].getAttribute('id') 
        const categoryNum=e.target.childNodes[e.target.selectedIndex].getAttribute('value') 
        const categoryName=e.target.childNodes[e.target.selectedIndex].innerHTML  
        dispatch(selectCategory({categoryNum, id, categoryName}))
      }
   
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDropDown)

 








