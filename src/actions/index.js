// Action creator 
import axios from 'axios';
//import {createAction} from '@reduxjs/toolkit'
import { actionTypes } from './Action-types';
import { useDispatch } from 'react-redux';

export  const deleteCategories = async id => {
  console.log("deleeting")
  await axios.delete(`/categories/deleteCategory/${id}`) 
  .catch((err) => {
      console.log("err",err)
  }) 
  //getCategories();
  //removeSelectedCategory(id);
}
export  const deleteRestaurant = async id => {
  console.log("deleeting restaurant"+id)
  await axios.delete(`/restaurants/deleteRestaurants/${id}`) 
  .catch((err) => {
      console.log("err",err)
  }) 
  //getCategories();
  //removeSelectedCategory(id);
}
export  const updateCategories = async (id, category) => {
  console.log("updating")
  await axios.patch(`/categories/editCategory/${id}`, { 
    headers: {"content-type":"application/json"},
    body: JSON.stringify(category) 
}) 
  .catch((err) => {
      console.log("err",err)
  }) 
  //getCategories();
  //removeSelectedCategory(id);
}
export  const updateRestaurant = async (id, restaurant) => {
  console.log("updating")
  await axios.patch(`/restaurants/editRestaurant/${id}`, { 
    headers: {"content-type":"application/json"},
    body: JSON.stringify(restaurant) 
}) 
  .catch((err) => {
      console.log("err",err)
  }) 
  //getCategories();
  //removeSelectedCategory(id);
} 

export  const getBookings = async () => {
  const response = await axios
  .get('/bookings/getBookings') 
  .catch((err) => {
      console.log("err",err)
  })
  setCategory(response.data);
}

export  const getCategories = async () => {
  const response = await axios
  .get('/categories/getCategories') 
  .catch((err) => {
      console.log("err",err)
  })
  setCategory(response.data);
}

export  const getRestaurants= async () => {
  const response = await axios
  .get('/restaurants/getRestaurants') 
  .catch((err) => {
      console.log("err",err)
  })
  setRestaurant(response.data);
}
export const selectLoggedIn = ({payload}) => {
  //console.log(`payload ${payload}`)
    // Return an action
    return {
      type: 'LOGGED_IN',
      payload: payload
    };  
};
export const removeSelectedCategory = category => {
  console.log("this is the delete selector")
  return {
    type: 'REMOVE_SELECTED_CATEGORY',
    payload: category,
  };
};

/// delete a category
export const removeCategory = (id) => {
  console.log("this is the first delete action") 
  console.log(id)
  return (dispatch) => {
      axios.delete(`http://localhost:3001/categories/deleteCategory/${id}`)
          .then(response => {
            console.log("goetting here")
              console.log(response);
              dispatch(removeSelectedCategory(id));
              dispatch(setCategory());
          })
          .catch(error => {
              console.log(error);
          });
  }
}
 
export const setCategory = category => {
      return{
        type: 'SET_CATEGORY',
        payload: category
      }
}
export const setRestaurant = restaurant => {
      return{
        type: 'SET_RESTAURANT',
        payload: restaurant
      }
}
export const removeCategory2 = category => {
      return{
        type: actionTypes.REMOVE_SELECTED_CATEGORY,
        payload: category
      }
}

export const getCategories2 = () => {
  return (dispatch) => {
    console.log("getting categories")
    axios.get('http://localhost:3001/categories')
    .then(response => {
      const categories = response.data;
    }).catch(error=> {const erroMsg = error.message})
  } 
}
 

export const selectCategory = category => {
    // Return an action
    return {
      type: 'CATEGORY_SELECTED',
      payload: category
    };
  };
 
  export const newCategory = category => {
    return {
      type: 'CATEGORY_ADDED'
    }
  }

//export const selectCategoryUser = category => {
    // Return an action
 //   return {
   //   type: 'CATEGORY_SELECTED',
    //  payload: category
   // };
  //};

  export const selectRestaurant = restaurant => {
    // Return an action
    return {
      type: 'RESTAURANT_SELECTED',
      payload: restaurant
    };
  };

export const selectRestaurantAdmin = restaurantInfo => {
    // Return an action
    return {
      type: 'ADMIN_RESTAURANT_SELECTED',
      payload: restaurantInfo
    };
  };
  
export const selectRestaurantUser = restaurantInfo => {
    // Return an action
    return {
      type: 'USER_RESTAURANT_SELECTED',
      payload: restaurantInfo
    };
  };
  