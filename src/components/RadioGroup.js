import React from 'react';
import InputRadio from './InputRadio';

function RadioGroup(props){
    return (
        <div className="text-center">
              <InputRadio inputPror={props.value1} handler={props.handler} radioName={props.answerNum}/>
              <InputRadio inputPror={props.value2} handler={props.handler} radioName={props.answerNum}/>
        </div>
    )
  }


export default RadioGroup;
