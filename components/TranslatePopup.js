'use client';

import { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaGlobe, FaSave } from 'react-icons/fa';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const language = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'bn', label: 'Bengali' },
    { value: 'mr', label: 'Marathi' },
    { value: 'te', label: 'Telugu' },
    { value: 'ta', label: 'Tamil' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'ur', label: 'Urdu' },
    { value: 'kn', label: 'Kannada' },
];

const TranslatePopup = () => {
    const router = useRouter();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setCookie('alredyVisited', 'true', { maxAge: 60 * 60 * 24 * 7 });
    }, []);

    const onLanguageChange = e => {
        const lang = e.target.value;
        doGTranslate(`en|${lang}`);
        document.cookie = `googtrans=/en/${lang}; expires=${new Date(Date.now() + 60 * 60 * 24 * 7).toUTCString()}; path=/`;
        window.location.reload();
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div
            onClick={e => {
                setOpen(false);
            }}
            className="translate-popup fixed left-0 top-0 grid h-screen w-screen place-items-center bg-black/25 p-3 backdrop-blur-sm"
        >
            <div className="card relative max-w-lg text-center" onClick={e => e.stopPropagation()}>
                <button type="button" className="absolute right-4 top-4 text-3xl text-primary-800">
                    <IoCloseSharp onClick={e => setOpen(false)} />
                </button>
                <FaGlobe className="mx-auto mt-4 text-6xl text-primary-800 md:text-7xl" />
                <h2 className="mt-4 text-xl font-semibold text-primary-800 md:text-2xl">Select Your Language</h2>
                <p className="mb-6 mt-4 text-sm text-gray-600 md:text-base">
                    Please select from the list below to change your language. We will remember your selection for
                    future.
                </p>

                <select name="language" id="language" onChange={onLanguageChange}>
                    <option disabled selected value>
                        select an option
                    </option>
                    {language.map(lang => (
                        <option key={lang.value} value={lang.value} translate="no">
                            {lang.label}
                        </option>
                    ))}
                </select>

                {/* <button onClick={_ => setOpen(false)} className="btn mt-3 w-full py-2">
                    <span>Save changes </span>
                    <FaSave />
                </button> */}
            </div>
        </div>
    );
};

export default TranslatePopup;
