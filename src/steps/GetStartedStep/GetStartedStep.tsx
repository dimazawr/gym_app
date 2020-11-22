import React from 'react';
import '../../App.css';
import { TextBox } from '../../components/TextBox/TextBox';
import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Link } from 'react-router-dom';


export const GetStartedStep = () => {
    return (
        <div>
        <Heading text={"Welcome to the Gym App"}/>
        <TextBox text={"This is a simple app which could help you with a choose of a program for your gym training."}/>
        <Link to="/step_1">
            <Button value={"Get Started"}/>
        </Link>
        </div>
    )
}
