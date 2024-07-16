'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const TranslateButton = () => {
    useEffect(() => {
        window.gtranslateSettings = {
            default_language: 'en',
            native_language_names: true,
            detect_browser_language: true,
            languages: ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'ur', 'kn'],
            wrapper_selector: '.gtranslate_wrapper',
            flag_size: 24,
        };
    }, []);

    return (
        <>
            <div className="gtranslate_wrapper"></div>
        </>
    );
};

export default TranslateButton;
