'use client';
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

const navButtonHandler = (e) => {
    const dropdown = document.querySelector('#nav-dropdown-btn').nextElementSibling;
    if (dropdown.style.maxHeight == '0px' || dropdown.style.maxHeight == '0') {
        dropdown.style.maxHeight = '243px';
    }
    else {
        dropdown.style.maxHeight = '0px';
    }
}

export default function Nav() {
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

    return (
        <nav className="flex m-3 w-[calc(100% - calc(var(--spacing) * 3))] justify-between border-b-3 border-current mt-0">
            <Link href={pageRoutes.index.link}
                className="invert-colors rounded-t-[3px] px-3 py-0.1 text-xl flex items-center"
            >
                Holly M. Phillips
            </Link>
            <div className="nav-list relative">
                <button
                    id="nav-dropdown-btn"
                    onClick={(e) => navButtonHandler(e)}
                    className="w-auto text-right py-[4px] pr-[16px] pl-[40px] text-xl"
                    aria-roledescription="open the dropdown for the navigation"
                >
                    <span>{currentPageName}</span>
                </button>
                <div id="select-dropdown"
                    className="absolute w-[200px] text-right top-full right-0 overflow-hidden z-2"
                    style={{ maxHeight: '0px' }}
                >
                    <ul id="nav-select" defaultValue={pageRoutes.index.link}
                        className="relative cursor-pointer p-3 border-3 rounded-bl rounded-br rounded-b-md text-lg"
                        style={{ background: 'var(--background)' }}
                    >
                        <Grain classes="h-[100%] absolute" style={{ zIndex: '2 !important' }} />
                        {Object.keys(navContent).map(x => 
                            <li key={camelCaseToDashes(x)} data-x={camelCaseToDashes(x)}>
                                <Link href={navContent[x].link} onClick={() =>{setTimeout(navButtonHandler, 10)}}>
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
