import React from 'react';


function Button(props) {


    if(props.value === 'Reset') {
      return <button onClick={props.handleClick} className="btn btn-bg btn-warning">{props.value}</button>
    } else if(props.value === 'Next') {
       return <button className="btn btn-bg btn-success mt-5" disabled id="next">{props.value}</button>
    } else if(props.value === 'Previous'){
      return <button className="btn btn-bg btn-success mt-5 mr-5" >{props.value}</button>
    } else {
      return <button className="btn btn-bg btn-success mt-5">{props.value}</button>
    }

}


export default Button;
