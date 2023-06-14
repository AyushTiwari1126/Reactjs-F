import React from "react";

function SelectOptionItem (props){
        return(<>
             <option selected={props.isSelected}>{props.name}</option>
        </>);
} 

export default SelectOptionItem;