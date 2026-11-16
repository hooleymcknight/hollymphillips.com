'use client'

import StatusBadge from "@/app/components/projects/statusBadge";

export default function RFID() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">RFID Inventory</h1>
            <h4 className="text-center">React Native App + Express API</h4>

            <video width="800" height="450" controls loop autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/rfid/rfid-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <StatusBadge status="Paused" notes="will return" />

            <p className="max-w-[600px] w-full text-[18px] mx-auto mb-16 font-[family-name:var(--font-cabin)]!">
                A multi-platform inventory tracker that uses RFID tags to help users find things around the house. 
                Each storage container carries its own RFID tag. Scanning the tag lists everything inside that container. 
                Users can easily move items between storage containers, browse containers from the app (without scanning) 
                to see their contents, and search for an item by name to find its location. The app is built with React Native 
                and talks to a custom Express API backed by a MySQL schema I designed for rooms, containers, and items.
            </p>
        </main>
    );
}