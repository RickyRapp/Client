import CreateNewRestaurant from './forms/CreateNewRestaurant';
import React, {useState, useRef} from 'react'; 
import DropDown from './dropdown';
import UserInfo from './Components/Users';
import AdminInfo from './Admin';
import Route from './Components/Route';


  const restaurants = [
    {
      label:'(Select One)', 
      value:'0'
    },
    {
      label:'pizza bizza', 
      value:'1', 
      category_num:'5'
    },
    {
      label:'bistro', 
      value:'2', 
      category_num:'5'
    },
    {
      label:'yummys', 
      value:'3', 
      category_num:'2'
    },
    {
      label:'happy', 
      value:'4', 
      category_num:'2'},
    {
      label:'best italian restaurant in the world', 
      value:'5', 
      category_num:'1'
    }
  ]; 
  const categories = [
    {label:'(Select One)', value:'0'},
    {label:'italian', value:'1'},
    {label:'russian', value:'2'},
    {label:'kosher', value:'3'},
    {label:'hawaiin', value:'4'} ,
    {label:'pizza', value:'5'} 
  ];   
   
const App = () => { 
    const [selectedRestaurant, setselectedRestaurant] = useState(restaurants[0].label); 
    const [selectedCategory, setselectedCategory] = useState(categories[0].label); 
    const testing = () => {
      console.log("testing")
    }
  return (
    <div>  
      <Route path="/">
        <DropDown
        selected={selectedCategory} 
        options={categories} 
        onSelectedChange={setselectedCategory} 
        title="Select a Category: " />  
        <br /><br />
        <DropDown 
        selected={selectedRestaurant} 
        options={restaurants} 
        onSelectedChange={setselectedRestaurant}  
        title="Select a Restaurant: " />
      </Route> 
      <Route path="/user">
        <UserInfo />
      </Route>
      <Route path="/admin">
        <AdminInfo />
      </Route>
    </div>
    
  );
}

export default App;
