import React from 'react';
import { render } from '@testing-library/react';
import { PrivacyChecks, PrivacyChecksTypes } from '.';

const props: PrivacyChecksTypes = {
    onBack: () => null,
    onSubmit: () => null
};

describe('PrivacyChecks component', () => {
    it('should render', () => {
        const { container } = render(<PrivacyChecks {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
