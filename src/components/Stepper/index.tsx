import React, { useState } from 'react';
import { UserDataTypes } from '../../types';
import { SignUpForm } from '../SignUpForm';
import { PrivacyChecks } from '../PrivacyChecks';
import { SuccessMessage } from '../SuccessMessage';
import * as S from './styles';

/**
 * Store finalised form in parent state
 * Store finalised privary in parent state
 * Parent collates and console logs
 * Therefore can create form component
 */

export const Stepper = () => {
    const [signUpData, setSignUpData] = useState<UserDataTypes>();
    const [privacyData, setPrivacyData] = useState<UserDataTypes>();
    const [step, setStep] = useState(1);

    const handleSignUpSubmit = (userData: UserDataTypes) => {
        setSignUpData(userData);
        setStep(2);
    };

    const handlePrivacySubmit = (privacyChecks: any) => {
        setPrivacyData(privacyChecks);
        setStep(3);
    };

    const handleBack = () => setStep(1);

    console.log({ signUpData, privacyData });

    return (
        <div>
            <h3>Stepper</h3>

            <S.ButtonWrapper>
                <S.NavButton isActive={step === 1}>User</S.NavButton>
                <S.NavButton isActive={step === 2}>Privacy</S.NavButton>
                <S.NavButton isActive={step === 3}>Done</S.NavButton>
            </S.ButtonWrapper>

            {step === 1 && <SignUpForm onSubmit={handleSignUpSubmit} />}
            {step === 2 && <PrivacyChecks onBack={handleBack} onSubmit={handlePrivacySubmit} />}
            {step === 3 && <SuccessMessage />}
        </div>
    );
};
