import { cookies } from 'next/headers';
import RegistrationBox from './RegistrationBox';
import TranslatePopup from '@/components/TranslatePopup';

export const metadata = { title: 'Home' };

export default function Home() {
    return (
        <main className="grid min-h-[calc(100vh-6rem)] place-items-center px-3 py-12">
            {!cookies().has('alredyVisited') && <TranslatePopup />}

            <RegistrationBox />
        </main>
    );
}
