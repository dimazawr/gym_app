import React, {useContext} from 'react';
import '../App.css';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import MainForm from '../components/MainForm';
import Heading from '../components/Heading';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';

function FirstFormStep() {
  const context = useContext(GlobalContext);
    return (
        <div className="text-center">
            <Heading text={"Step 1"}/>
            <TextBox className="mx-auto" text={`How many days per week do you want to spend in a gym? Choose one of the following options.`}/>
            <MainForm value1={2} value2={3} handler={context.handlerFirst}/>
            <Link to="/">
                <Button value={'Previous'}/> 
            </Link>

            <Link to="/step_2">
                <Button value={'Next'}/>
            </Link>
    
        </div>
    )
}

export default FirstFormStep;