import React, { FC, useState } from 'react';
import * as S from './styles';

export type PrivacyChecksTypes = {
    onBack: () => void;
    onSubmit: (privacyChecks: any) => void;
};

export const PrivacyChecks: FC<PrivacyChecksTypes> = ({ onBack, onSubmit }) => {
    // TODO: rename these
    const [isUpdatesChecked, setIsUpdatesChecked] = useState(false);
    const [isCommunicationChecked, setIsCommunicationChecked] = useState(false);

    const handleSubmit = () => {
        onSubmit({ isUpdatesChecked, isCommunicationChecked });
    };

    return (
        <S.Form>
            <S.InputWrapper>
                <input
                    type="checkbox"
                    checked={isUpdatesChecked}
                    onChange={() => setIsUpdatesChecked(!isUpdatesChecked)}
                    data-testid="updatesCheckbox"
                />
                <S.Text>Receive updates about Tray.io product by email</S.Text>
            </S.InputWrapper>

            <S.InputWrapper>
                <input
                    type="checkbox"
                    checked={isCommunicationChecked}
                    onChange={() => setIsCommunicationChecked(!isCommunicationChecked)}
                    data-testid="communicationCheckbox"
                />
                <S.Text>Receive communication by email for other products created by the Tray.io team</S.Text>
            </S.InputWrapper>

            <button type="button" onClick={onBack}>
                Back
            </button>

            <button type="submit" onClick={handleSubmit} data-testid="privacySubmit">
                Next
            </button>
        </S.Form>
    );
};
