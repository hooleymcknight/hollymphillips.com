'use client'

import StatusBadge from "@/app/components/projects/statusBadge";

export default function Tierator() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Tierator</h1>
            <h4 className="text-center">Vue.js Website</h4>

            <video width="800" height="541" controls loop autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/tierator/tierator_v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <StatusBadge status="Archived" notes="" />

            <p className="max-w-[600px] w-full text-[18px] mx-auto mb-16 font-[family-name:var(--font-cabin)]!">
                Tierator was a website that enabled users to create a tier list (as shown above) 
                with easy-to-use drag and drop features and image export capabilities. This site was 
                built using Vue.js.
            </p>
        </main>
    );
}