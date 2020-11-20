import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TextBox } from './TextBox';



describe('TextBox', () => {
    test('renders TextBox component', () => {
        render(<TextBox />);
    });

    describe('Renders TextBox with props', () => {
        test('Has "Hello" as a text value', () => {
            render(<TextBox text="Hello" />)
            expect(screen.getByText('Hello')).toBeInTheDocument();
        })
    })
});