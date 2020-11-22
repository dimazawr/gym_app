import React from 'react';


type Props = {
  text: string
}

export const TextBox:React.FC<Props> = ({ text }) => {
    return (
      <div className="lead text-wrap mx-auto">
        <p>{text}</p>
      </div>
    )
  }

