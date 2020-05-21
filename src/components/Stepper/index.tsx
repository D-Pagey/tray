import React, { useState } from 'react';
import { SuccessMessage } from '../SuccessMessage';
import * as S from './styles';

export const Stepper = () => {
    const [step, setStep] = useState(1);

    return (
        <div>
            <h3>Stepper</h3>

            <S.ButtonWrapper>
                <S.NavButton isActive={step === 1}>User</S.NavButton>
                <S.NavButton isActive={step === 2}>Privacy</S.NavButton>
                <S.NavButton isActive={step === 3}>Done</S.NavButton>
            </S.ButtonWrapper>

            {step === 1 && <p>Form</p>}
            {step === 2 && <p data-testid="privacyStep">Privacy</p>}
            {step === 3 && <SuccessMessage />}

            <button type="button" onClick={() => setStep(2)}>
                Next
            </button>
        </div>
    );
};
