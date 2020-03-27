import React, {useContext} from 'react';
import '../App.css';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import MainForm from '../components/MainForm';
import Heading from '../components/Heading';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';

function SecondFormStep() {
    const context = useContext(GlobalContext)
    return (
        <div className="text-center">
            <Heading text={"Step 2"}/>
            <TextBox className="mx-auto" text={`Would you like to focus you training on strength or muscle hypertrophy? Choose one of the following options.`}/>
            <MainForm value1={'Strength'} value2={'Hypertrophy'} handler={context.handlerSecond}/>
            <Link to="/step_1">
                <Button value={'Previous'}/> 
            </Link>

            <Link to="/result">
                <Button value={'Next'}/>
            </Link>
        </div>
    )
}

export default SecondFormStep;