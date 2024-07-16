import Input from '@/components/UI/Input';
import SubmitBtn from '@/components/UI/SubmitBtn';
import { redirect } from 'next/navigation';
import { FaLock, FaSign, FaSignInAlt } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const LoginBox = ({ isInvalid }) => {
    const formAction = async formData => {
        'use server';
        const key = formData.get('key');
        console.log(key);
        redirect(`/admin?key=${key}`);
    };

    return (
        <div className="mx-3">
            <form
                action={formAction}
                className="mx-auto mt-24 w-full max-w-lg rounded-lg bg-white px-4 py-8 shadow-xl md:px-8"
            >
                {isInvalid && (
                    <div className="mb-5 w-full rounded-md border-2 border-red-500 bg-red-200 p-3 font-medium text-red-900">
                        <p>
                            <MdCancel className="mr-1 inline text-xl" /> Access Denied!
                        </p>
                    </div>
                )}

                <h3>
                    <FaLock className="mx-auto mb-4 text-center text-6xl text-primary-800" />
                </h3>
                <h2 className="flex items-center justify-center gap-5 text-center text-2xl font-semibold text-primary-800 md:text-3xl">
                    Admin Panel
                </h2>
                <p className="mb-8 mt-2 text-center text-xs text-gray-600 md:mb-10 md:text-base">
                    Please enter your secret key to view admin panel
                </p>
                <Input name={'key'} label={'Secret Key'} placeholder={'Please Enter your secret key'} required={true} />

                <SubmitBtn classname="btn mt-3 w-full">
                    <span>Login</span>
                    <FaSignInAlt />
                </SubmitBtn>
            </form>
        </div>
    );
};

export default LoginBox;
