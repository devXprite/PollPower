import { cookies } from 'next/headers';
import EVM from './EVM';

export const metadata = { title: 'Vote' };


const page = ({ searchParams: { voterId } }) => {
    const voterName = cookies().get('voterName')?.value;

    return (
        <div className="px-2 py-12">
            <EVM voterName={voterName} />
        </div>
    );
};

export default page;
