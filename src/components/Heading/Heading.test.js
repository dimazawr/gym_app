import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Heading } from './Heading';



describe('Heading', () => {
    test('renders Heading component', () => {
        render(<Heading />);
    });

    describe('Renders Heading with props', () => {
        test('Has "Step 1" as a text value', () => {
            render(<Heading text="Step 1" />)
            expect(screen.getByText('Step 1')).toBeInTheDocument();
        })
    })
});