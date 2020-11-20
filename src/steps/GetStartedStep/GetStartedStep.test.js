import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { GetStartedStep } from "./GetStartedStep";


describe('GetStartedStep', () => {
    test('renders GetStartedStep Component', () => {
        render(<GetStartedStep/>, {wrapper: MemoryRouter})
    })

    describe('Renders child components',() => {
        test('Renders Heading component', () => {
            const { getByText } = render(<GetStartedStep/>, {wrapper: MemoryRouter})
            getByText("Welcome to the Gym App")
        })

        test('Renders TextBox component', () => {
            const { getByText } = render(<GetStartedStep/>, {wrapper: MemoryRouter})
            getByText("This is a simple app which could help you with a choose of a program for your gym training.")
        })

        test('Renders Button component', () => {
            const { getByText } = render(<GetStartedStep/>, {wrapper: MemoryRouter})
            getByText("Get Started")
        })
    })


    describe("Button redirects on click", () => {
        test('Redirects to DaysStep on click', () => {
            const { getByText } = render(<GetStartedStep/>, {wrapper: BrowserRouter})
            const leftClick = { button: 0 }
            fireEvent.click(getByText("Get Started"), leftClick)
            expect(document.location.pathname).toEqual('/step_1')
        })
    })
})