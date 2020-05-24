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
            <input type="checkbox" checked={isUpdatesChecked} onChange={() => setIsUpdatesChecked(!isUpdatesChecked)} />
            <p>Receive updates about Tray.io product by email</p>

            <input
                type="checkbox"
                checked={isCommunicationChecked}
                onChange={() => setIsCommunicationChecked(!isCommunicationChecked)}
            />
            <p>Receive communication by email for other products created by the Tray.io team</p>

            <button type="button" onClick={onBack}>
                Back
            </button>

            <button type="submit" onClick={handleSubmit}>
                Next
            </button>
        </S.Form>
    );
};
