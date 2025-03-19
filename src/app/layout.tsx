import type { Metadata } from 'next';
import { barlow } from '@/app/fonts';
import './globals.css';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Separemos Las Aguas',
    description: 'De dónde vienen y a dónde van las aguas que ocupamos',
    //generator: 'Next.js',
    applicationName: 'WebPage Separemos Las Aguas',
    authors: [{ name: 'Edgardo Ruotolo Cardozo', url: 'https://crowadvance.com' }],
    creator: 'Edgardo Ruotolo Cardozo',
    publisher: 'Edgardo Ruotolo Cardozo',
    category: 'Soluciones en Tecnología',
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'Separemos Las Aguas',
        description: 'De dónde vienen y a dónde van las aguas que ocupamos',
        url: 'https://www.separemoslasaguas.cl/',
        type: 'website',
        siteName: 'Separemos Las Aguas',
        images: [
            {
                url: 'https://www.separemoslasaguas.cl/portada-redes.jpeg',
                width: 1185,
                height: 1280,
                alt: 'Portada Redes Sociales - Separemos las Aguas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Separemos Las Aguas',
        description: 'De dónde vienen y a dónde van las aguas que ocupamos',
        images: ['https://www.separemoslasaguas.cl/portada-redes.jpeg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="!scroll-smooth">
            <body className={`${barlow.className} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
