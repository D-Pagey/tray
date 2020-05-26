import React, { useState } from 'react';
import { PrivacyDataTypes, UserDataTypes } from '../../types';
import { SignUpForm } from '../SignUpForm';
import { PrivacyChecks } from '../PrivacyChecks';
import { SuccessMessage } from '../SuccessMessage';
import * as S from './styles';

export const Stepper = () => {
    const [signUpData, setSignUpData] = useState<UserDataTypes>();
    const [step, setStep] = useState(1);

    const handleSignUpSubmit = (userData: UserDataTypes) => {
        setSignUpData(userData);
        setStep(2);
    };

    const handlePrivacySubmit = (privacyData: PrivacyDataTypes) => {
        const result = { ...signUpData, ...privacyData };
        console.log({ result });

        setStep(3);
    };

    const handleBack = () => setStep(1);

    return (
        <div>
            <S.Title>Sign Up Form</S.Title>

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
