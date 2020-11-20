import React from 'react';

export const InputRadio = ({ radioName, inputValue, handler }) => {

    return (
      <div className="form-check form-check-inline">
      <input name={radioName} type='radio' className="form-control-lg form-check-input" onChange={handler} value={inputValue} />
      <label data-testid="input-label" htmlFor={radioName} className="form-check-label ml-1">{inputValue}</label>
      </div>
    )
}


