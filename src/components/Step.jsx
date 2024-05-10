import { useState } from 'react';

const Step = () => {
    const [step, setStep] = useState(0);
    const handleDecrement = () => {
        setStep(step - 1);
    }
    const handleIncrement = () => {
        setStep(step + 1);
    }
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>Step: {step}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
};

export default Step;