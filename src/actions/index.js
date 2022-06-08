// Action creator 
import axios from 'axios'; 

export  const deleteCategories = async id => { 
  await axios.delete(`/categories/deleteCategory/${id}`) 
  .catch((err) => {
      console.log("err",err)
  })  
}
export  const deleteRestaurant = async id => { 
  await axios.delete(`/restaurants/deleteRestaurants/${id}`) 
  .catch((err) => {
      console.log("err",err)
  })  
}
export  const updateCategories = async (id, category) => { 
  await axios.patch(`/categories/editCategory/${id}`, { 
    headers: {"content-type":"application/json"},
    body: JSON.stringify(category) 
}) 
  .catch((err) => {
      console.log("err",err)
  })  
}
export  const updateRestaurant = async (id, restaurant) => { 
  await axios.patch(`/restaurants/editRestaurant/${id}`, { 
    headers: {"content-type":"application/json"},
    body: JSON.stringify(restaurant) 
}) 
  .catch((err) => {
      console.log("err",err)
  })  
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
    return {
      type: 'LOGGED_IN',
      payload: payload
    };  
};
export const removeSelectedCategory = category => { 
  return {
    type: 'REMOVE_SELECTED_CATEGORY',
    payload: category,
  };
};


export const removeCategory = (id) => { 
  return (dispatch) => {
      axios.delete(`http://localhost:3001/categories/deleteCategory/${id}`)
          .then(response => {  
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

  export const selectRestaurant = restaurant => { 
    return {
      type: 'RESTAURANT_SELECTED',
      payload: restaurant
    };
  };

 