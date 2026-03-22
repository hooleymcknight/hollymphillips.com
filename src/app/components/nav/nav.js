'use client';
import pageRoutes from "@/pageRoutes";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navContent = {
    'All': pageRoutes.index,
    'My Core Purpose': pageRoutes.purpose,
    'Case Studies': pageRoutes.caseStudies,
    'Portfolio': pageRoutes.portfolio,
    'Resume': pageRoutes.resume,
    'Reviews': pageRoutes.reviews,
}

const navButtonHandler = (e) => {
    // const dropdown = e.target.closest('button').nextElementSibling;
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
    const pathIndex = Object.values(navContent).indexOf(pathname);
    const currentPageName = Object.keys(navContent)[pathIndex];

    return (
        <nav className="flex m-3 w-[calc(100% - calc(var(--spacing) * 3))] justify-between border-b-3 border-current mt-0">
            <Link href={pageRoutes.index}
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
                    className="absolute w-[200px] text-right top-full right-0 overflow-hidden"
                    style={{ maxHeight: '0px' }}
                >
                    <ul id="nav-select" defaultValue={pageRoutes.index}
                        className="cursor-pointer p-3 border-b-3 border-x-3 rounded-bl rounded-br rounded-b-md text-lg"
                    >
                        {Object.keys(navContent).map(x => 
                            <li key={x.replace(/\s/g, '-')}>
                                <Link href={navContent[x]} onClick={() =>{setTimeout(navButtonHandler, 10)}}>{x}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
