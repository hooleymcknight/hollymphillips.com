import { getServerSession } from 'next-auth';
import { headers } from "next/headers";
import SessionProvider from "./SessionProvider";
import Nav from "./components/nav/nav";
import { Jersey_25, Tiny5, Coral_Pixels, Jersey_15_Charted, Cabin_Condensed, Cabin } from "next/font/google";
import "./globals.css";
import Grain from './components/grain';
import FrameButtons from './components/frame-buttons';

const jersey25 = Jersey_25({
    variable: "--font-jersey-25",
    weight: '400',
    subsets: ["latin"],
});

const tiny5 = Tiny5({
    variable: "--font-tiny5",
    weight: '400',
    subsets: ["latin"], 
});

const coralPixels = Coral_Pixels({
    variable: "--font-coral-pixels",
    weight: '400',
    subsets: ["latin"],
});

const jersey15charted = Jersey_15_Charted({
    variable: "--font-jersey-15-charted",
    weight: '400',
    subsets: ["latin"], 
});

const cabinCondensed = Cabin_Condensed({
    variable: "--font-cabin-condensed",
    weight: '400',
    subsets: ["latin"],
});

const cabin = Cabin({
    variable: "--font-cabin",
    weight: '400',
    subsets: ["latin"],
});

export const metadata = {
  title: "Holly M. Phillips",
  description: "Developer portfolio site for Holly M. Phillips",
};

export default async function RootLayout({ children, params }) {
    const session = await getServerSession();
    // const headerStore = await headers();
    // const searchParams = Object.fromEntries(
    //     new URLSearchParams(headerStore.get('searchParams') || '')
    // );

    return (
        <html lang="en">
            <head>
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
            </head>
            <body
                className={`${tiny5.variable} ${jersey25.variable} ${cabinCondensed.variable} ${cabin.variable} antialiased`}
            >
                <div className="pv-frame">
                    <div className={`pv-topbar`}>
                        <h2 className="pt-1 pb-2">
                            Holly M. Phillips
                        </h2>
                    </div>

                    <div className="pv-screen">
                        <SessionProvider session={session}>
                            <div className="pv-grain-clip">
                                <Grain classes="h-full w-full" />
                            </div>
                            <Nav />
                            {children}
                        </SessionProvider>
                    </div>

                    <FrameButtons />
                </div>
            </body>
        </html>
    );
}
