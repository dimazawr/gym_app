import React from 'react';
import { InputRadio } from '../InputRadio/InputRadio';

export const RadioGroup = ({ value1, value2, handler, answerNum }) => {
    return (
        <div className="text-center">
              <InputRadio inputValue={value1} handler={handler} radioName={answerNum}/>
              <InputRadio inputValue={value2} handler={handler} radioName={answerNum}/>
        </div>
    )
  }
