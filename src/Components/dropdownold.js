
const DropDowns = () =>  {   
    const [selectedRestaurant, setselectedRestaurant] = useState(restaurants[0].label); 
    const [selectedCategory, setselectedCategory] = useState(categories[0].label); 
    return ( 
        <div>
        <DropDownOutline
        selected={selectedCategory} 
        options={categories} 
        onSelectedChange={setselectedCategory} 
        title="Select a Category: " />  
        <br /><br />
        <DropDownOutline 
        selected={selectedRestaurant} 
        options={restaurants} 
        onSelectedChange={setselectedRestaurant}  
        title="Select a Restaurant: " />
        </div>
    )
}

export default DropDowns;

 