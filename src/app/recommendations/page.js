'use client'
import AppTileGrid from '../components/appTileGrid';
import recommendations from '../data/shoutouts.json';

export default function Recommendations() {

    return (
        <main className="max-w-[1000px] mx-auto relative">
            <h1 className="text-center">Recommendations</h1>
            <div className="grid grid-cols-4 justify-center font-sans w-full">
                <AppTileGrid data={recommendations} />
            </div>
        </main>
    );
}