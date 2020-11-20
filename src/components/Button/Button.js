import React from 'react';


export const Button = ({ value, handleClick }) => {


    if(value === 'Reset') {
      return <button onClick={handleClick} className="btn btn-bg btn-warning">{value}</button>
    } else if(value === 'Next') {
       return <button className="btn btn-bg btn-success mt-5" disabled id="next">{value}</button>
    } else if(value === 'Previous'){
      return <button className="btn btn-bg btn-success mt-5 mr-5" >{value}</button>
    } else {
      return <button className="btn btn-bg btn-success mt-5">{value}</button>
    }

}

