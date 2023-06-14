import React from "react";

/*
items [{title, is_primary, is_info, is_seconday}]
*/



export default function ButtonActions(props){

  const getClass = (alignment)=>{
    switch(alignment){
      case "right":
        return "d-flex justify-content-end mt-2"
        default:
          return "text-center mt-4"
    }
  }

  const renderButton = (id, name, is_primary, is_info, is_seconday, onClick)=> {
    if (is_primary)
      return (
        <button key={id} type="button" className="btn btn-primary mx-2" onClick={() => onClick(name)}>
          {name}
        </button>
      );
    else if (is_info) {
      return (
        <button key={id} type="button" className="btn btn-info mx-2" onClick={() => onClick(name)}>
          {name}
        </button>
      );
    }
    else if (is_seconday) {
      return (
        <button key={id} type="button" className="btn btn-secondary mx-2" onClick={() => onClick(name)}>
          {name}
        </button>
      )
    }
    else {
      return (
        <button key={id} type="button" className="btn btn-danger mx-2" onClick={() => onClick(name)}>
          {name}
        </button>
      );
    }
  }

    const buttonAlignment = getClass(props.alignment)
    return (
      <div className={buttonAlignment}>
        {props.items.map(({id, title, is_primary, is_info, is_seconday }) => renderButton(id, title, is_primary, is_info, is_seconday, props.onClick))}
      </div>
    );
  
}