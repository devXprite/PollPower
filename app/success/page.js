import Confetti from '@/components/Confetti';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { FaChartPie, FaPen, FaShare } from 'react-icons/fa';
import { RWebShare } from 'react-web-share';
import ShareBtn from './ShareBtn';

export const metadata = { title: 'Vote Submitted' };


const page = () => {
    const voterName = cookies().get('voterName')?.value;

    return (
        <div className="px-3 py-20">
            <Confetti />
            <div className="relative mx-auto w-full max-w-xl rounded-lg bg-white p-4 shadow-xl md:p-8">
                <img className="mx-auto size-28 md:size-32" src="/success_new.gif" alt="" srcSet="" />
                <h2 className="text-center text-2xl font-semibold text-green-600 md:text-3xl">Vote Submitted!</h2>

                <div className="mt-6 space-y-3 text-justify text-sm md:text-base">
                    <p>
                        Thank you <b>{voterName || ''}</b> for participating in this Poll! Remember, this is just a
                        simulation. Your vote is your power. Every ballot counts towards building a brighter future.
                        Don't let your voice go unheard. Your vote is not just a right but a responsibility towards
                        nation-building. Be the change you wish to see. Let's come together and make democracy stronger
                        than ever before. Vote in the Lok Sabha Elections 2024 for a better tomorrow!
                    </p>
                    <p>
                        Enjoying our website? Don't forget to share our website with your friends and family if you
                        found it useful. Sharing is caring!
                    </p>
                </div>
                <Link href={'/result'} className="btn mx-auto mt-8">
                    <span>View Poll Results</span>
                    <FaChartPie />
                </Link>
                <ShareBtn />
            </div>
        </div>
    );
};

export default page;
