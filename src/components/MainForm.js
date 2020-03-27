import React from 'react';
import InputRadio from './InputRadio';

function MainForm(props){
    return (
        <div className="text-center">
          <form>
              <InputRadio inputPror={props.value1} handler={props.handler}/>
              <InputRadio inputPror={props.value2} handler={props.handler}/>
          </form>
        </div>
    )
  }


export default MainForm;
