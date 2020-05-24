import React from 'react';
import { render } from '@testing-library/react';
import { SignUpForm } from '.';

describe('SignUpForm component', () => {
    it('should render', () => {
        const { container } = render(<SignUpForm />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
