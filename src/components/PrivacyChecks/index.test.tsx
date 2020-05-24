import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    it('should call onSubmit with both values when both checked', async () => {
        const onSubmit = jest.fn();
        const { getByTestId } = render(<PrivacyChecks {...props} onSubmit={onSubmit} />);

        userEvent.click(getByTestId('communicationCheckbox'));
        userEvent.click(getByTestId('updatesCheckbox'));
        userEvent.click(getByTestId('privacySubmit'));

        await waitFor(() =>
            expect(onSubmit).toHaveBeenCalledWith({ isCommunicationChecked: true, isUpdatesChecked: true })
        );
    });

    // TODO: change names
    it.each`
        clickFirstCheckbox
        ${true}
        ${false}
    `(
        'should call onSubmit with correct values when the first checkbox is checked = $clickFirstCheckbox',
        async ({ clickFirstCheckbox }) => {
            const onSubmit = jest.fn();
            const { getByTestId } = render(<PrivacyChecks {...props} onSubmit={onSubmit} />);

            if (clickFirstCheckbox) {
                userEvent.click(getByTestId('updatesCheckbox'));
            } else {
                userEvent.click(getByTestId('communicationCheckbox'));
            }

            userEvent.click(getByTestId('privacySubmit'));

            await waitFor(() =>
                expect(onSubmit).toHaveBeenCalledWith({
                    isCommunicationChecked: !clickFirstCheckbox,
                    isUpdatesChecked: clickFirstCheckbox
                })
            );
        }
    );
});
