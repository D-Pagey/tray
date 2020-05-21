import React from 'react';
import { render } from '@testing-library/react';
import { SuccessMessage } from '.';

describe('SuccessMessage component', () => {
    it('should render', () => {
        const { container } = render(<SuccessMessage />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
