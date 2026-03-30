/**
 * when you need client components in here, make those the child elements. import them into here.
 * the parent must be server.
 */

import AppTile from "./components/appTile";
import appData from './data/appData.json';

// reference:
// https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/2655288/palm-v-56-1020.1349135797.jpg?quality=90&strip=all

export default function Home() {
    return (
        <>
            <main className="content-container">
                <div className="grid grid-cols-4 justify-center font-sans w-full">
                     {
                        Object.keys(appData).map(x => 
                            <AppTile
                                key={x}
                                link={appData[x].link}
                                imageSrc={appData[x].imageSrc}
                                imageAlt={appData[x].imageAlt}
                                hoverSrc={appData[x].hoverSrc}
                                name={x}
                            />
                        )
                     }
                </div>
            </main>
        </>
    );
}
