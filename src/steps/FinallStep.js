import React from 'react';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import TrainingProgram from '../components/TrainingProgram';
import Heading from '../components/Heading';


function FinallStep() {
    return (
        <div>
        <Heading text={"Here is your program"}/>
        <TrainingProgram />
        <Link to="/">
            <Button value={"Reset"} handleClick={() => localStorage.clear()}/>
        </Link>
        </div>
    )
}

export default FinallStep;