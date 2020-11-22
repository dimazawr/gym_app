import React from 'react';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { TrainingProgram } from '../../components/TrainingProgram/TrainingProgram';
import { Heading } from '../../components/Heading/Heading';


export const FinallStep = () => {
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
