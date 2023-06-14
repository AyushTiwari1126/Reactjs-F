import React, {forwardRef, useEffect, useState} from "react";

const InputItem = forwardRef(({Name, Inputplaceholder, Value, readOnly}, _ref) => {
        const [value, setValue] = useState(Value);

        useEffect(()=>{
                setValue(Value);
        }, [Value])

        const onChange = (event)=>{
                if(!readOnly){
                        setValue(event.target.value);
                }
        }
        return(<>
             <div className="mb-3">
              <label for="inputCSN" className="form-label">{Name}</label>
              <input disabled={readOnly} ref={_ref} value={value} type="text" className="form-control" placeholder={Inputplaceholder}
              id="inputCSN"
              onChange={onChange}
              />
              </div>
        
        </>); 

})

export default React.memo(InputItem);