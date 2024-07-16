'use client';
import { IoMdRefresh } from 'react-icons/io';

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="mx-auto mt-40 max-w-screen-lg px-4 text-center">
            <h3 className="mb-3 text-2xl font-semibold">Something went wrong!</h3>
            <p>
                We're sorry, but we're having trouble loading this page. Please try refreshing the page or try again
                later.
            </p>

            <button onClick={() => reset()} className="btn !mx-auto mt-6">
                <span>Try Again</span>
                <IoMdRefresh />
            </button>
        </div>
    );
};

export default Error;
