import React, {useContext} from 'react';
import '../../App.css';
import { TextBox } from '../../components/TextBox/TextBox';
import { Button } from '../../components/Button/Button';
import { RadioGroup } from '../../components/RadioGroup/RadioGroup';
import { Heading } from '../../components/Heading/Heading';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';

export const  TrainingTypeStep = () => {
    const context = useContext(GlobalContext)
    const { handleRadioChange } = context;
    return (
        <div className="text-center">
            <Heading text={"Step 2"}/>
            <TextBox text={`Would you like to focus you training on strength or muscle hypertrophy? Choose one of the following options.`}/>
            <RadioGroup value1={'Strength'} value2={'Hypertrophy'} answerNum={"answer_two"} handler={handleRadioChange} />
            <div className="mt-5">
                <Link to="/step_1" className="mr-5">
                    <Button value={'Previous'}/> 
                </Link>
                <Link to="/result">
                    <Button value={'Next'}/>
                </Link>
            </div>
        </div>
    )
}
