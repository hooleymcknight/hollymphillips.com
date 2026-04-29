import { getServerSession } from 'next-auth';
import { headers } from "next/headers";
import SessionProvider from "./SessionProvider";
import Nav from "./components/nav/nav";
import { Jersey_25, Tiny5, Coral_Pixels, Jersey_15_Charted } from "next/font/google";
import "./globals.css";
import Grain from './components/grain';

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
                className={`${tiny5.variable} ${jersey25.variable} antialiased`}
            >
                <SessionProvider session={session}>
                    <Grain classes="h-[100vh] fixed" />
                    <Nav />
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
