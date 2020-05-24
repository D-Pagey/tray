import React, { useState } from 'react';
import { SignUpForm } from '../SignUpForm';
import { SuccessMessage } from '../SuccessMessage';
import * as S from './styles';

/**
 * Store finalised form in parent state
 * Store finalised privary in parent state
 * Parent collates and console logs
 * Therefore can create form component
 */

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

            {step === 1 && <SignUpForm />}
            {step === 2 && <p data-testid="privacyStep">Privacy</p>}
            {step === 3 && <SuccessMessage />}

            <button type="button" onClick={() => setStep(2)}>
                Next
            </button>
        </div>
    );
};
