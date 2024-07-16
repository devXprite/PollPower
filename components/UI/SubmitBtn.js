'use client';
import { useFormStatus } from 'react-dom';
import { CgSpinner } from 'react-icons/cg';
import { twMerge } from 'tailwind-merge';

const SubmitBtn = ({ children, classname }) => {
    const { pending } = useFormStatus();

    if (pending) {
        return (
            <button className={twMerge('', classname)} disabled>
                <CgSpinner className="animate-spin" />
            </button>
        );
    }

    return (
        <button type="submit" className={twMerge('', classname)}>
            {children}
        </button>
    );
};

export default SubmitBtn;
