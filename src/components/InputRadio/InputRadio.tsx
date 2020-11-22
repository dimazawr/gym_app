import React from 'react';


type Props = {
  radioName: string,
  inputValue: string | number
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputRadio:React.FC<Props> = ({ radioName, inputValue, handler }) => {

    return (
      <div className="form-check form-check-inline">
      <input name={radioName} type='radio' className="form-control-lg form-check-input" onChange={handler} value={inputValue} />
      <label data-testid="input-label" htmlFor={radioName} className="form-check-label ml-1">{inputValue}</label>
      </div>
    )
}


