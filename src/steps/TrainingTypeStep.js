import React, {useContext} from 'react';
import '../App.css';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import Heading from '../components/Heading';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';

function TrainingTypeStep() {
    const context = useContext(GlobalContext)
    const { handleRadioChange } = context;
    return (
        <div className="text-center">
            <Heading text={"Step 2"}/>
            <TextBox className="mx-auto" text={`Would you like to focus you training on strength or muscle hypertrophy? Choose one of the following options.`}/>
            <RadioGroup value1={'Strength'} value2={'Hypertrophy'} answerNum={"answer_two"} handler={handleRadioChange} />
            <Link to="/step_1">
                <Button value={'Previous'}/> 
            </Link>

            <Link to="/result">
                <Button value={'Next'}/>
            </Link>
        </div>
    )
}

export default TrainingTypeStep;