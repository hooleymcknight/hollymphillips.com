import pageRoutes from "@/pageRoutes";
import Image from "next/image";
import Link from "next/link";

const navContent = {
    'My Core Purpose': pageRoutes.purpose,
    'Case Studies': pageRoutes.caseStudies,
    'Portfolio': pageRoutes.portfolio,
    'Resume': pageRoutes.resume,
    'Reviews': pageRoutes.reviews,
}

export default function Home() {
    return (
        <>
            <nav>
                <Link href={pageRoutes.index}>holly m phillips</Link>
            </nav>
            <div className="content-container">
                <div className="sidebar">
                    <ul>
                        {Object.keys(navContent).map(x => 
                            <li key={x.replace(/\s/g, '-')}>
                                <Link href={navContent[x]}>
                                    {x}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <main className="flex min-h-screen items-center justify-center font-sans">
                    <div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
                        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
                                h1
                            </h1>
                            <p className="max-w-md text-lg leading-8 text-zinc-600">
                                p
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                            placeholder
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
