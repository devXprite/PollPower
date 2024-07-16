'use client';

import PoliticalParties from '@/data/PoliticalParties';
import { useEffect, useState } from 'react';
import { MdTouchApp } from 'react-icons/md';
import VVPAT from './VVPAT';

const EVM = ({ voterName }) => {
    const [selectedParty, setSelectedParty] = useState(null);
    const [showVVPAT, setShowVVPAT] = useState(false);

    useEffect(() => {
        const beep = new Audio('/beep.wav');
        beep.preload = 'auto';

        if (selectedParty?.name) {
            const timer = setTimeout(_ => setShowVVPAT(true), 2000);
            beep.play();
            return () => clearTimeout(timer);
        }

        return beep.remove();
    }, [selectedParty?.name]);

    const cancleVote = () => {
        setSelectedParty(null);
        setShowVVPAT(false);
    };

    if (showVVPAT) return <VVPAT cancleVote={cancleVote} party={selectedParty} />;

    return (
        <div className="evm relative mx-auto w-full max-w-lg rounded-md  bg-white p-3 shadow-xl md:p-4">
            <div className="absolute right-4 top-0 flex items-center gap-2 rounded-b-md bg-primary-500 px-3 py-1 text-xs font-semibold text-white shadow-md md:text-sm ">
                <span>EVM</span> <MdTouchApp className="md:text-lg" />
            </div>

            <div className="mt-5 flex justify-between ">
                <p className="flex h-min w-max items-center gap-2 rounded-md bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-500">
                    Ready <span className="led green on animate !size-3"></span>{' '}
                </p>

                <div
                translate='no'
                    scrollamount={4}
                    className="neon h-max !w-44 overflow-hidden rounded bg-red-900 p-1 text-center font-[Electrolize] text-xs font-semibold tracking-wider shadow-md md:!w-52 md:text-sm"
                >
                    {selectedParty ?
                        <p>Voted!</p>
                    :   <p>
                            <span translate='yes'>Voter:</span> {voterName}{' '}
                        </p>
                    }
                </div>
            </div>

            <table className="mt-6 rounded-md bg-gray-100">
                <tbody>
                    {PoliticalParties.map((party, index) => (
                        <tr key={index}>
                            <td className="hidden md:table-cell">{index + 1}</td>

                            <td className="w-full">
                                <p className="text-xs md:text-base" translate="no">
                                    {party.name}
                                </p>
                                <p className="text-xs text-gray-500 md:text-sm">{party.nameHindi}</p>
                            </td>

                            <td>
                                <div className="w-8 md:w-10">
                                    <img src={party.symbol} alt={party.name} className="w-full" />
                                </div>
                            </td>

                            <td className="w-min bg-white">
                                <div className="inline-flex w-min items-center gap-2 md:gap-3">
                                    <span
                                        className={
                                            selectedParty === party ? 'led green size-4 md:size-5' : (
                                                'led size-4 md:size-5'
                                            )
                                        }
                                    ></span>
                                    <button
                                        disabled={selectedParty}
                                        onClick={() => setSelectedParty(party)}
                                        className={`h-6 w-14 rounded-full text-xs text-primary-50 disabled:cursor-not-allowed md:h-8 md:w-16 ${selectedParty === party ? 'bg-blue-900' : 'bg-blue-700'} `}
                                    ></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <audio src="/beep.wav"></audio> */}
        </div>
    );
};

export default EVM;
