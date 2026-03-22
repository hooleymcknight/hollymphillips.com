import { getServerSession } from 'next-auth';
import { headers } from "next/headers";
import SessionProvider from "./SessionProvider";
import Nav from "./components/nav/nav";
import { Jersey_25, Tiny5, Coral_Pixels, Jersey_15_Charted } from "next/font/google";
import "./globals.css";

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
  title: "holly m phillips",
  description: "developer site",
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
                    <div className="grainy-background">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                            <filter id="grainy-noise">
                                <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="4" stitchTiles="stitch"/>
                            </filter>
                            <rect width='100%' height='100%' filter='url(#grainy-noise)' />
                        </svg>
                    </div>
                    <Nav />
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
