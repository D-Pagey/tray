import React, { FC, useState } from 'react';
import { PrivacyDataTypes } from '../../types';
import { Button } from '../Button';
import * as S from './styles';

export type PrivacyChecksTypes = {
    onSubmit: (privacyChecks: PrivacyDataTypes) => void;
};

export const PrivacyChecks: FC<PrivacyChecksTypes> = ({ onSubmit }) => {
    const [receiveUpdates, setReceiveUpdates] = useState(false);
    const [receiveCommunication, setReceiveCommunication] = useState(false);

    const handleSubmit = () => {
        onSubmit({ receiveUpdates, receiveCommunication });
    };

    return (
        <S.Form data-testid="privacyChecks">
            <S.InputWrapper>
                <input
                    type="checkbox"
                    checked={receiveUpdates}
                    onChange={() => setReceiveUpdates(!receiveUpdates)}
                    data-testid="updatesCheckbox"
                />
                <S.Text>Receive updates about Tray.io product by email</S.Text>
            </S.InputWrapper>

            <S.InputWrapper>
                <input
                    type="checkbox"
                    checked={receiveCommunication}
                    onChange={() => setReceiveCommunication(!receiveCommunication)}
                    data-testid="communicationCheckbox"
                />
                <S.Text>Receive communication by email for other products created by the Tray.io team</S.Text>
            </S.InputWrapper>

            <Button onClick={handleSubmit} data-testid="privacySubmit">
                Next
            </Button>
        </S.Form>
    );
};
