import React from 'react';
import { InputRadio } from '../InputRadio/InputRadio';

type Props = {
    value1: string | number,
    value2: string | number,
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    answerNum: string
}

export const RadioGroup:React.FC<Props> = ({ value1, value2, handler, answerNum }) => {
    return (
        <div className="text-center">
              <InputRadio inputValue={value1} handler={handler} radioName={answerNum}/>
              <InputRadio inputValue={value2} handler={handler} radioName={answerNum}/>
        </div>
    )
  }
