import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'; 
import axios from 'axios';
import { setCategory } from '../actions';

const CategoryViewForm = () => {
    
    const categories = useSelector((state) => state.categories)
    const dispatch = useDispatch();

    const getCategories = async () => {
        const response = await axios
        .get('/categories/getCategories') 
        .catch((err) => {
            console.log("err",err)
        })
        dispatch(setCategory(response.data));
    }
    useEffect(() => {
        getCategories()
    },[]) 
    console.log(categories) 
  //  {categories.categories}
     
    }

    export default CategoryViewForm;

