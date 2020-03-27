import React from 'react';

function InputRadio(props){

    return (
      <div className="form-check form-check-inline">
      <input name="input_radio" type='radio' className="form-control-lg form-check-input" onChange={props.handler} value={props.inputPror} />
      <label htmlFor="input_radio" className="form-check-label ml-1">{props.inputPror}</label>
      </div>
    )
}


export default InputRadio;
