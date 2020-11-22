import React from 'react';

type Props = {
  text: string;
}

export const Heading: React.FC<Props> = ({text}) => {
    return (
      <>
        <h1 className="display-4 mb-5">{text}</h1>
      </>
    )
  }



