'use client';
import { useState, useEffect } from 'react';
import pageRoutes from "@/pageRoutes";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { camelCaseToDashes } from "@/app/helpers/helpers";
import Grain from "../grain";

const navContentKeys = Object.keys(pageRoutes).filter(x => pageRoutes[x].navDisplay != null);
let navContent = {};
navContentKeys.forEach((key) => {
    navContent[key] = {
        'link': pageRoutes[key].link,
        'navDisplay': pageRoutes[key].navDisplay,
        'sublinks': pageRoutes[key].sublinks || false,
    };
});



export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const pathIndex = Object.values(navContent).map(x => x.link).indexOf(pathname);
    let currentPageName = Object.values(navContent)[pathIndex]?.navDisplay || 'All'; // "all" is fallback

    const pathParts = pathname.split('/');
    const parent = pathParts[1] || null;
    const child = pathParts[pathParts.length - 1] || null;

    if (parent != child) {
        const parentObj = Object.values(navContent).filter(x => 
            x.sublinks
            && x.link === `/${parent}`
            && Object.values(x.sublinks).includes(`/${child}`));
        currentPageName = parentObj.length ? parentObj[0].navDisplay : currentPageName;
    }

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav className="flex m-3 justify-between border-b-3 border-current mt-0">
            <Link href={pageRoutes.index.link}
                className="invert-colors rounded-t-[3px] px-3 text-xl flex items-center"
            >
                Home
            </Link>
            <div className="nav-list relative">
                <button
                    id="nav-dropdown-btn"
                    onClick={() => {setIsOpen(!isOpen)}}
                    className="w-auto text-right py-[4px] pr-[16px] pl-[40px] text-xl"
                    aria-expanded={isOpen}
                >
                    <span><span className="sr-only">Filter: </span>{currentPageName}</span>
                </button>
                <div id="select-dropdown"
                    className="absolute w-[200px] text-right top-full right-0 overflow-hidden z-2"
                    style={{ maxHeight: `${isOpen ? '248px' : '0px'}`, background: 'var(--background)' }}
                    inert={isOpen ? null : true}
                >
                    <Grain classes="h-[100%] absolute" />
                    <ul id="nav-select"
                        className="relative cursor-pointer p-3 border-3 rounded-bl rounded-br rounded-b-md text-lg z-3 !list-none"
                    >
                        {Object.keys(navContent).map(x => 
                            <li key={camelCaseToDashes(x)} data-x={camelCaseToDashes(x)}>
                                <Link href={navContent[x].link}>
                                    {navContent[x].navDisplay}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
