'use client';

import { MdTouchApp } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import vote from '@/actions/vote';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import toast from 'react-hot-toast';

const VVPAT = ({ party, cancleVote }) => {
    const [loading, setLoading] = useState(false);

    const submitVote = async () => {
        setLoading(true);
        vote(party)
            .then(res => {
                if (!res) return;
                if (!res?.ok) {
                    toast.error(res.error);
                    setLoading(false);
                }
            })
            .catch(_ => {
                toast.error('Something went wrong!');
                setLoading(false);
            });
    };

    if (loading) {
        return (
            <div className="mt-64 text-center">
                <CgSpinner className="mx-auto animate-spin text-6xl text-primary-500 md:text-7xl" />
                <p className=" mt-3 animate-pulse font-medium md:text-xl">Submitting Your Vote...</p>
            </div>
        );
    }

    return (
        <div className="relative mx-auto w-full max-w-lg rounded-lg  bg-white p-4 shadow-xl md:p-8">
            <h2 className="text-center text-2xl font-semibold text-primary-800 md:text-3xl">VVPAT</h2>

            <p className="mt-2 animate-pulse text-center text-sm md:text-base">
                Please verify the printed slip below. If the slip is not correct, then press the cancel button to cancel
                the vote.
            </p>

            <div className="wrapper relative mx-auto mt-8 h-72 w-full overflow-hidden rounded-2xl border-2 border-gray-300 p-2 shadow-lg md:w-96">
                <img
                    className="absolute inset-0 z-10 h-full w-full object-fill"
                    src="/glass_new.png"
                    alt=""
                    srcSet=""
                />
                <div className="vvpat-animate paper p-4 text-center  transition-all">
                    <p className="mb-8 text-right font-mono text-xs tracking-tight text-gray-600">
                        {new Date().toLocaleString('en-IN', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                        })}
                    </p>
                    <img src={party.symbol} className="mx-auto size-28" alt="" srcSet="" />
                    <h3 className="mt-4 text-lg font-semibold md:text-2xl" translate='no'>{party.name}</h3>

                    <h4 className="text-base font-semibold  md:text-xl">{party.nameHindi}</h4>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
                <button onClick={cancleVote} className="btn bg-red-500 px-8 py-2 text-sm md:text-base">
                    <span>Cancel</span>
                    <ImCancelCircle />
                </button>
                <button onClick={submitVote} className="btn bg-green-600 px-8 py-2 text-sm md:text-base">
                    <span>Vote</span>
                    <MdTouchApp className="text-xl" />
                </button>
            </div>

            <div className="mt-5 text-center">
                <h3 className="font-semibold text-gray-500 md:text-xl">Power On</h3>
                <p className="led green animate mx-auto mt-1"></p>
            </div>
        </div>
    );
};

export default VVPAT;
