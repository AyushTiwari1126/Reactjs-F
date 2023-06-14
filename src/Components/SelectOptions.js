import React from "react";
import SelectOptionItem from "./SelectOptionItem";


/*
props{
    items:{id:, name}
    selectedOption:
    onSelect:
}
*/
function SelectOptions(props){

    const onSelect = (e)=>{
        if(props.onSelect){
            props.onSelect(e.target.value);
        }else{
            console.log("on Select inside select options is called ", e.target.value)
        }
    }

        return (
            <>
                <div className="col-md-6">
                    <label>{props.name}</label>
                    <select  onChange={onSelect} className="form-select" aria-label="Default select example">
                        {props.items.map(
                            (element) => <SelectOptionItem 
                            id={element.id} 
                            name={element.name} 
                            isSelected={element.id === props.selectedOption}/>
                            )}
                    </select>
                </div>
            </>
        );
}

export default SelectOptions;