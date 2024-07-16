'use client';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
    if (typeof window === 'undefined') return null;
    return <ReactConfetti className="!fixed" width={window.innerWidth} height={window.innerHeight} />;
};

export default Confetti;
