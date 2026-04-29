'use client'
import AppTileGrid from '../components/appTileGrid';
import spotlights from '../data/spotlights.json';

export default function Spotlights() {

    return (
        <main className="max-w-[1000px] mx-auto relative">
            <h1 className="text-center">Spotlights</h1>
            <AppTileGrid data={spotlights} />
        </main>
    );
}