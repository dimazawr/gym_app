import React, {useContext} from 'react';
import '../App.css';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import Heading from '../components/Heading';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';

function DaysStep() {
  const context = useContext(GlobalContext);
  const { handleRadioChange } = context;
    return (
        <div className="text-center">
            <Heading text={"Step 1"}/>
            <TextBox className="mx-auto" text={`How many days per week do you want to spend in a gym? Choose one of the following options.`}/>
            <RadioGroup value1={2} value2={3} answerNum={"answer_one"} handler={handleRadioChange}/>
            <Link to="/">
                <Button value={'Previous'}/> 
            </Link>

            <Link to="/step_2">
                <Button value={'Next'}/>
            </Link>
    
        </div>
    )
}

export default DaysStep;