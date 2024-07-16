import React from 'react';

const page = () => {
    return (
        <div className="mx-auto max-w-screen-lg [&_a]:text-primary-600 [&_a]:underline space-y-8  px-3 py-8 text-justify text-sm md:py-12 md:text-left md:text-base [&>div]:space-y-2.5 ">
            <div className="card">
                <h2 className="text-justify text-2xl font-semibold text-primary-800 md:text-3xl">About Us</h2>
                <p>
                    Welcome to Pollpower, your go-to destination for an engaging and interactive voting experience
                    during the 2024 Lok Sabha Elections!
                </p>

                <p>
                    At Pollpower, we believe that every voice matters in shaping the future of our nation. That's why
                    we've created a user-friendly online voting simulator to encourage civic participation and empower
                    individuals to exercise their right to vote.
                </p>

                <p>
                    Our platform, built with cutting-edge technologies including Next.js, Tailwind CSS, and Prisma,
                    offers a seamless and intuitive voting experience. Whether you're a first-time voter or a seasoned
                    participant, Pollpower provides a convenient way to simulate the voting process and view real-time
                    results.
                </p>

                <p>
                    One of the highlights of Pollpower is the integration of React Chart, allowing users to explore
                    voting trends through dynamic and interactive visualizations. Witness the pulse of democracy unfold
                    right before your eyes!
                </p>

                <p>
                    But Pollpower isn't just about voting. It's also a learning experience. As the creator of Pollpower,
                    I embarked on this journey as my final year college project, pouring my passion for technology and
                    civic engagement into every line of code.
                </p>
            </div>

            <div className="card">
                <h2 className="text-justify text-xl font-semibold text-primary-800 md:text-2xl">Terms of Service</h2>

                <ol className="mt-4 list-disc space-y-3 pl-4 text-sm ">
                    <li>
                        <b>Usage:</b> Pollpower is intended for educational and informational purposes only. Users are
                        prohibited from engaging in any unlawful or malicious activities on the platform.
                    </li>

                    <li>
                        <b>Accuracy:</b> While we strive to provide accurate and up-to-date information, Pollpower
                        cannot guarantee the accuracy or completeness of the voting results displayed on the platform.
                    </li>

                    <li>
                        <b>Data Privacy:</b> We respect the privacy of our users and are committed to protecting their
                        personal information. Pollpower adheres to strict data privacy policies and does not share user
                        data with third parties without consent.
                    </li>

                    <li>
                        <b>Feedback:</b> We value feedback from our users. If you have any suggestions, comments, or
                        concerns about Pollpower, please don't hesitate to reach out to us.
                    </li>
                </ol>
            </div>

            <div className="card">
                <h2 className="text-justify text-xl font-semibold text-primary-800 md:text-2xl">Contact Us</h2>
                <p>
                    Anyone can contact us at{' '}
                    <a className="" href="mailto:admin@pollpower.site">
                        admin@pollpower.site
                    </a>{' '}
                    . We welcome your inquiries and feedback! Thank you for choosing Pollpower.{' '}
                </p>
            </div>
        </div>
    );
};

export default page;
