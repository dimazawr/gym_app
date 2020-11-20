import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RadioGroup } from './RadioGroup';


describe('RadioGroup', () => {
    test('renders RadioGroup component', () => {
        render(<RadioGroup />);
    });

    describe('Renders RadioGroup with props', () => {
        test('Has both value from props',() => {
            const { getByText } = render(<RadioGroup value1="value1" value2="value2" />)
            getByText("value1")
            getByText("value2")
        })
    })
});