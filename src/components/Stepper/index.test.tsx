import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from '.';

describe('Stepper component', () => {
    it('should render', () => {
        const { container } = render(<Stepper />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should progress the step', () => {
        const { getByText, getByTestId } = render(<Stepper />);

        userEvent.click(getByText('Next'));

        getByTestId('privacyStep');
    });
});
