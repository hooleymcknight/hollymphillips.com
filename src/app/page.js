/**
 * when you need client components in here, make those the child elements. import them into here.
 * the parent must be server.
 */

import AppTileGrid from "./components/appTileGrid";
import { getAppTileData } from "./helpers/helpers";

// reference:
// https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/2655288/palm-v-56-1020.1349135797.jpg?quality=90&strip=all

const indexData = getAppTileData();

export default function Home() {
    return (
        <>
            <main className="content-container">
                <AppTileGrid data={indexData} />
            </main>
        </>
    );
}
