'use client';

import Input from '@/components/UI/Input';
import { StatesList } from '@/data/IndianStates';
import { useMemo, useState } from 'react';
import { MdTouchApp } from 'react-icons/md';
import toast from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';
import { registerVoter } from '@/actions/registerVoter';

const RegistrationBox = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const stateOptions = useMemo(() => StatesList.map(state => ({ value: state, label: state })), []);

    const inputFields = [
        {
            name: 'name',
            label: 'Name',
            required: true,
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
        },
        {
            name: 'age',
            label: 'Age',
            type: 'number',
            required: true,
        },
        {
            name: 'gender',
            label: 'Gender',
            type: 'select',
            required: true,
            options: [{ value: 'male' }, { value: 'female' }],
        },
        {
            name: 'state',
            label: 'State',
            type: 'select',
            required: true,
            options: stateOptions,
        },
    ];

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.target));
        console.log(formData);

        const actionResponse = await registerVoter(formData);
        setLoading(false);

        if (!actionResponse) return;
        const { ok, message, error } = actionResponse;

        if (ok) toast.success(message);
        else toast.error(error);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg  rounded-lg bg-white px-4 py-8 shadow-xl md:px-8">
            <h2 className="flex items-center justify-center gap-5 text-center text-2xl font-semibold text-primary-800 md:text-3xl">
                <span>Get Started!</span>
            </h2>
            <p className="mb-4 mt-2 text-center text-xs text-gray-600 md:mb-6 md:text-sm">
                Please enter your details to vote in Polling
            </p>
            <div className="space-y-3">
                {inputFields.map(field => (
                    <Input
                        key={field.name}
                        value={formData[field.name]}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                [field.name]: e.target.value,
                            })
                        }
                        {...field}
                    />
                ))}
            </div>

            <div className="mt-6">
                {loading ?
                    <button className="btn w-full text-sm md:text-base" disabled>
                        <span className="animate-pulse">Processing...</span>{' '}
                        <CgSpinner className="animate-spin text-2xl" />
                    </button>
                :   <button className="btn w-full text-sm md:text-base">
                        <span>Vote Now</span> <MdTouchApp className="text-2xl" />
                    </button>
                }
            </div>

            {/* <p className="mt-3 animate-pulse text-center text-xs font-semibold text-red-500 md:text-sm">
                Note: Only one Vote allowed per Email & IP Address. You can't change your vote once submitted. So please
                vote carefully.
            </p> */}
        </form>
    );
};

export default RegistrationBox;
