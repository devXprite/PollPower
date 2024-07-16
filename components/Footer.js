import TranslateButton from './TranslateButton';

const Footer = () => {
    return (
        <footer className="mt-4 border-t border-gray-300 bg-gray-200 px-3 py-5 md:py-3">
            <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 text-center text-sm md:flex-row  ">
                
                <p className="text-sm text-gray-600 md:text-base">
                    {/* Designed and coded 
                    <a className="text-teal-600 underline hover:brightness-125" href="http://github.com/devXprite/">
                        DevXprite
                    </a>| */}
                     Source available on <a className="text-teal-600 underline hover:brightness-125" href="https://github.com/devXprite/PollPower">GitHub</a>, give it a ⭐️!
                </p>
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <p>Language:</p>
                    <TranslateButton />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
