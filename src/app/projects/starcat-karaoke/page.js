'use client'

import StatusBadge from "@/app/components/projects/statusBadge";

{/* <video width="800" height="338" controls autoPlay={true} muted className="mx-auto my-8">
    <source src="/projects/starcat-karaoke/starcat-karaoke-v1_showcase_muted.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video> */}

export default function videovomitTv() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">StarCat Karaoke</h1>
            <h4 className="text-center">Homemade Karaoke / Python + JS</h4>

            <img
                width="800" height="450" className="mx-auto my-8"
                src="/projects/starcat-karaoke/starcat-karaoke-v1_showcase.gif"
                alt="StarCat karaoke demo: choosing song, playing song"
            />

            <StatusBadge status="Active" notes="" />

            <p className="max-w-[600px] w-full text-[18px] mx-auto mb-16">
                I built this karaoke app for backyard BBQs, inspired by an 
                old karaoke desktop application I remember playing with as a kid. My script 
                takes songs in as purchased audio then runs them through Demucs to split the 
                vocals out, LRCLIB to grab the lyrics, and WhisperX to align the lyrics and 
                audio. The player I built displays the timed lyrics, wiping each word as it lands.
                <br/><br/>
                I set out to deliver nostalgia to my parties, so I used the name of a 
                venture my sister and I made up in our basement play room as children &mdash;
                StarCat Arcade, now presenting StarCat Karaoke.
            </p>
        </main>
    );
}