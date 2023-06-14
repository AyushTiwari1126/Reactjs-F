import React from "react";

/* props structure
{
    title:
    name:
    items[{name, id, isChecked}]
}
*/
export default class CheckBoxesRow extends React.Component{

    checkedRadio(id, isChecked, name){
        if(isChecked)
            return <input className="form-check-input" type="radio"  name={name} id={id} checked />;

        return  <input className="form-check-input" type="radio" name ={name} id={id}  />;
    }

    renderCheckBox(boxName, name, id, isChecked){
        
        return (
            <>
            {this.checkedRadio(id, isChecked, boxName)}
            <label className="form-check-label px-2" for={id}>
            {name}
            </label>
            </>
            
        );
    }

    //fixMe: on default checkbox has to be enabled.
    render(){
       return(
        <div className="mb-3">
        <label for="inputPassword5" className="form-label px-2">{this.props.title}</label>
        {this.props.items.map(({name, id, isChecked})=>this.renderCheckBox(this.props.name, name, id, isChecked))}
        
        {/* <input className="form-check-input" type="radio" name="flexRadioDefaults" id="flexRadioDefault2" checked />
        <label className="form-check-label px-2" for="flexRadioDefault2">
        Residential
        </label>
        <input className="form-check-input" type="radio" name="flexRadioDefaults" id="flexRadioDefault1"/>
        <label className="form-check-label px-2" for="flexRadioDefault1">
        Office
        </label> */}
    </div>
        );
    }

}