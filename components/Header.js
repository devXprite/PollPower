'use client';

import Link from 'next/link';
import { FaChartPie } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="gradient px-4 py-3 text-white">
            <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4">
                <div>
                    <h2 className="text-base font-semibold md:text-xl" translate='no' >PollPower</h2>
                    {/* <h2 className="text-base font-semibold md:text-xl">PowerPoll</h2> */}
                    <p className='text-[10px] md:text-xs text-primary-200 font-medium -mt-1'>Chunav ka parv Desh ka garv</p>
                </div>

                {/* <ReactTyped
                    className="hidden md:block"
                    strings={[
                        'Want to live better? Choose your leaders wisely',
                        'One right vote, Voila! The country changes',
                        'Voting is your right. Try to do it right',
                        'Be a true citizen and cast your vote',
                    ]}
                    typeSpeed={70}
                    backSpeed={30}
                    backDelay={4000}
                    shuffle={true}
                    loop={true}
                    startDelay={800}
                /> */}

                <Link href={'/result'} className="btn bg-white py-1.5 text-sm md:text-base text-primary-600">
                    <span>View Results</span>
                    <FaChartPie />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
