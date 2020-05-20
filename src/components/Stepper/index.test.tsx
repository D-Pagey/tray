import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from '.';

describe('Stepper component', () => {
    it('should render', () => {
        const { container } = render(<Stepper />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should increment the step', () => {
        const { getByText } = render(<Stepper />);

        userEvent.click(getByText('Up'));

        getByText('Step 2');
    });

    it('should decrement the step', () => {
        const { getByText } = render(<Stepper />);

        userEvent.click(getByText('Up'));

        getByText('Step 2');

        userEvent.click(getByText('Down'));

        getByText('Step 1');
    });
});
