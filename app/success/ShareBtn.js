'use client';

import { FaShare } from 'react-icons/fa';
import { RWebShare } from 'react-web-share';

const ShareBtn = () => {
    return (
        <RWebShare
            data={{
                text: 'Hey everyone! Just discovered this cool website where I could simulate voting for the Lok Sabha Elections 2024. Check it out and have some fun! ',
                url: 'https://pollpower.site/',
                title: 'PollPower',
            }}
        >
            <button className="btn mx-auto mt-2 bg-gray-200 text-sm w-full text-gray-800">
                <span>Share with Friends</span>
                <FaShare />
            </button>
        </RWebShare>
    );
};

export default ShareBtn;
