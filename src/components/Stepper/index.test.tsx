import React from 'react';
import { render } from '@testing-library/react';
import { Stepper } from '.';

describe('Stepper component', () => {
    it('should render', () => {
        const { container } = render(<Stepper />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it.todo('should progress the step - have to fill in the form');
});
