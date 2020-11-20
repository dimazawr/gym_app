import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';


describe('Button', () => {
    test('renders Button component', () => {
        render(<Button />);
    });

    describe('Renders Button with props', () => {
        test('Has "Reset" as a text value', () => {
            render(<Button value="Reset" />)
            expect(screen.getByText('Reset')).toBeInTheDocument();
        })

        test('Has "Next" as a text value', () => {
            render(<Button value="Next" />)
            expect(screen.getByText('Next')).toBeInTheDocument();
        })

        test('Has "Previous" as a text value', () => {
            render(<Button value="Previous" />)
            expect(screen.getByText('Previous')).toBeInTheDocument();
        })

        test('Has "Get Started" as a text value', () => {
            render(<Button  value="Get Started" />)
            expect(screen.getByText('Get Started')).toBeInTheDocument();
        })
    })
});