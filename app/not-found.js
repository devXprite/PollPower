import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export const metadata = { title: '404' };

export default function NotFound() {
    return (
        <div className="mx-auto mt-56 max-w-screen-sm px-4 text-center">
            <h3 className="mb-3 text-3xl font-semibold">Not Found</h3>
            <p>
                We're sorry, but the page you're looking for doesn't exist. Please check the URL in the address bar and
                try again.
            </p>
            <Link href={'/'} className="btn !mx-auto mt-6 max-w-sm">
                <span>Return to Home</span>
                <FaHome />
            </Link>
        </div>
    );
}
