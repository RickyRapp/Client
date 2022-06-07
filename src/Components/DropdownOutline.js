//import { options } from 'nodemon/lib/config';
import React, {useState} from 'react';

const DropDownOutline = (props) =>  { 
    console.log(props)
    const [selected, setSelected] = useState(props.selected.value) 
    //const onSelectChange = (e) => console.log(e.target.value)

    const setOption = props.options.map((option) => {
        console.log(option.category_num)
        return (
            <option 
                //onChange={() => option.onSelectedChange(option)} 
                //onClick={()=>onSelectChange(option)} 
                id={option.value}
                key={option.value}
                >
                {option.label}
            </option>
        )
    })
    return ( 
        <div>
            <label>{props.title}</label>
            <select onChange={e =>props.onSelectedChange(e.target.value)}>
                {setOption}
            </select>
            <div>{`props: ${props.selected}`}</div>
        </div>
    )
}

export default DropDownOutline;

 
