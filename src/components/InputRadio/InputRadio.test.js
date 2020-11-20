import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InputRadio } from './InputRadio';


describe('InputRadio', () => {
    test('renders InputRadio component', () => {
        render(<InputRadio />);
    });

    describe('Renders InputRadio with props', () => {
        test('Has input value',() => {
            const { getByText } = render(<InputRadio inputValue="1" />)
            getByText("1")
        })
    })
});