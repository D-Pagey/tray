import React, { useState } from 'react';

export const Stepper = () => {
    const [step, setStep] = useState(1);

    const handleStep = (direction: string) => () => {
        if (direction === 'up') {
            const newStep = step + 1;

            setStep(newStep);
        }

        if (direction === 'down') {
            setStep(step - 1);
        }
    };

    return (
        <div>
            <h3>Stepper</h3>

            {step === 1 && <p>Step 1</p>}
            {step === 2 && <p>Step 2</p>}
            {step === 3 && <p>Step 3</p>}

            {step < 3 && (
                <button type="button" onClick={handleStep('up')}>
                    Up
                </button>
            )}

            {step > 1 && (
                <button type="button" onClick={handleStep('down')}>
                    Down
                </button>
            )}
        </div>
    );
};
