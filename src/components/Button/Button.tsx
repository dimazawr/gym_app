import React from 'react';



type Props = {
  value: string,
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: React.FC<Props> = ({ value, handleClick }) => {


    if(value === 'Reset') {
      return <button onClick={handleClick} className="btn btn-bg btn-warning">{value}</button>
    } else if(value === 'Next') {
       return <button className="btn btn-bg btn-success" disabled id="next">{value}</button>
    } else if(value === 'Previous'){
      return <button className="btn btn-bg btn-success" >{value}</button>
    } else {
      return <button className="btn btn-bg btn-success">{value}</button>
    }

}

