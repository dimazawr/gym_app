import React, { useContext } from 'react';
import '../../App.css';
import { TextBox } from '../../components/TextBox/TextBox';
import { Button } from '../../components/Button/Button';
import { RadioGroup } from '../../components/RadioGroup/RadioGroup';
import { Heading } from '../../components/Heading/Heading';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';

export const DaysStep = () => {
  const context = useContext(GlobalContext!);
  const { handleRadioChange } = context;
    return (
        <div className="text-center">
            <Heading text={"Step 1"}/>
            <TextBox text={`How many days per week do you want to spend in a gym? Choose one of the following options.`}/>
            <RadioGroup value1={2} value2={3} answerNum={"answer_one"} handler={handleRadioChange}/>
            <div className="mt-5">
                <Link to="/" className="mr-5" >
                    <Button value={'Previous'}/> 
                </Link>

                <Link to="/step_2">
                    <Button value={'Next'}/>
                </Link>
            </div>
    
        </div>
    )
}
