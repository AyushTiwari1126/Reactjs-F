import React from "react";
import InputItem from "./InputItem";

/*
array of objects with properties{
    title
    placeholer
}
*/

export default class InputRow extends React.Component {


    colomn(title, placeholer, ref, value, readOnly) {
        return (
            <div className="col-md-6">
                <InputItem Name={title} Inputplaceholder={placeholer} ref={ref} Value={value} readOnly={readOnly}/>
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                {this.props.items.map(obj => this.colomn(obj.title, obj.placeholder, obj.ref, obj.value, this.props.readOnly))}
            </div>
        );

    }

}