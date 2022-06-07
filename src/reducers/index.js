import { combineReducers } from 'redux';
import { actionTypes } from '../actions/Action-types';

const initialCState =  {
  categories: []
}; 

const initialRState =  {
  restaurants: []
}; 
const categoryReducer = (state=initialCState, {type, payload}) => {
  console.log(type)
  switch (type){
      case 'SET_CATEGORY':
          return {...state, categories:payload}
      case "REMOVE_SELECTED_CATEGORY":
          return {...state, categories: state.categories.filter((el) => el.id !== payload)} 
      default:
          return state;
  }
}

const restaurantReducer = (state=initialRState, {type, payload}) => {
  switch (type){
      case 'SET_RESTAURANT':
          return {...state, restaurants:payload}
      case "REMOVE_SELECTED_RESTAURANT":
          return {...state, restaurants: state.restaurants.filter((el) => el.id !== payload)} 
      default:
          return state;
  }
}
//const restaurantReducer3 = (state= initialState.restaurants, {type, payload}) => {
  //switch (type){
     // case 'SET_RESTAURANT':
      //    return {...state, restaurants:payload}
     // case "REMOVE_SELECTED_RESTAURANT":
    //      return {...state, restaurants: state.restaurants.filter((el) => el.id !== payload)} 
      //default:
  //        return state;
  //}
//}

const selectedCategoryReducer = (state=null, {type, payload}) => {
  switch (type){
      case "CATEGORY_SELECTED":
          return {id:payload.id, categoryNum:payload.categoryNum, categoryName:payload.categoryName}
      case "REMOVE_SELECTED_CATEGORY":
          return {...state, currentCategory:{id:null,categoryNum:'0'}}
      default:
          return state;
  }
}

const restaurantReducer2 = () => {
    return [ 
        {
          label:'pizza bizza', 
          value:'1', 
          category_num:'5',
          address:'100 Hillside Blvd, Lakewood, NJ'
        },
        {
          label:'bistro', 
          value:'2', 
          category_num:'5',
          address: '200 Clifton Ave, Lakewood, Nj'
        },
        {
          label:'yummys', 
          value:'3', 
          category_num:'2',
          address: '54 NY-59, Monsey, NY 10952'
        },
        {
          label:'happy', 
          value:'4', 
          category_num:'2',
          address: '54 NY-59, Monsey, NY 10952'
        },
        {
          label:'Marinellas Italian Restaurant and Pizzeria', 
          value:'5', 
          category_num:'1',
          address: '1195 NJ-70 #1, Lakewood, NJ 08701'
        }
      ];
  };

const loggedInReducer2 = (loggedInAs='', action) => {
  console.log(action)
  switch (action.type) {

    case 'LOGGED_IN_USER':
      return action.payload; 

    case 'LOGGED_IN_ADMIN':
      return action.payload; 

    default:
      return loggedInAs;
  }       
}
const loggedInReducer = (loggedInAs=null, action) => { 
  switch (action.type) {

    case 'LOGGED_IN':
      return action.payload;  

    default:
      return loggedInAs;
  }       
}

const selectedCategoryReducer2 = (selectedCategory = null, action) => { 
  switch (action.type) {

      case 'SELECTED_CATEGORY':
        return action.payload; 

      default:
        return selectedCategory;
  } 
}; 


const selectedRestaurantReducer = (selectedRestaurant = null, action) => {
  switch (action.type) { 
 
      case 'RESTAURANT_SELECTED':
        return action.payload;
        //return {id:payload.id, categoryNum:payload.categoryNum, categoryName:payload.categoryName}
    
      default:
        return selectedRestaurant;
  } 
};


export default combineReducers({
  categories: categoryReducer,
  restaurants: restaurantReducer,
  currentCategory:selectedCategoryReducer,
  currentRestaurant:selectedRestaurantReducer,
  currentLoggedInAs:loggedInReducer
});
