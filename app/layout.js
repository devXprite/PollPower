import Header from '@/components/Header';
import './globals.scss';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
    metadataBase: 'https://pollpower.site/',
    description:
        'Experience the democratic process first hand with our Lok Sabha Elections 2024 Simulation. Cast your virtual vote and explore the power of democracy in shaping the future',

    title: {
        template: `%s | PollPower`,
        default: 'PollPower',
    },

    openGraph: {
        title: 'PollPower',
        images: `/banner.png`,
        icons: {
            icon: `/favicon.png`,
        },
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script src="https://cdn.gtranslate.net/widgets/latest/dropdown.js"></Script>
                <Script src="/js/clarity.js"></Script>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </head>
            <body>
                <Toaster />
                <Header />
                <div className="min-h-[calc(100vh-6rem)]">{children}</div>
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-JV13KMVEFD" />

        </html>
    );
}
