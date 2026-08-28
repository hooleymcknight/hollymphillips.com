'use client'

import StatusBadge from "@/app/components/projects/statusBadge";

export default function GoGComm() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">GoG Comm Site</h1>
            <h4 className="text-center">NextJS Website</h4>

            <video width="800" height="450" controls autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/gogcomm/gogcomm-site.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <StatusBadge status="Paused" notes="will return" />

            <p className="max-w-[600px] w-full text-[18px] mx-auto mb-16">
                Built to serve an online community, this site showcases slick, organic-feeling moving features. 
                Coded using NextJS, GoG Comm also hosts its own contact form and account registration. 
                Admin users can create events, and all users can make changes to their own accounts as needed.
            </p>
        </main>
    );
}