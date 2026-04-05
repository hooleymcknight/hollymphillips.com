'use client'

export default function ANW() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">American Ninja Warrior Challenge</h1>

            <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/rg__IHC5AtQ?si=2lD1WWYJYX7y5ug4&start=432&autoplay=1&mute=1"
                className="mx-auto mt-8"
                title="YouTube video player: American Ninja Warrior Challenge"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            >
            </iframe>
            <small className="block max-w-[800px] text-right mx-auto mt-1 mb-8">This video does not belong to me.</small>

            <p className="max-w-[600px] mx-auto">
                American Ninja Warrior Challenge was one of the two video games I worked on with Gaming Corps Austin in 2018. 
                My role was Developer Support / QA Lead; most of my work on ANW was QA-related. I also assisted with set decorations. 
                This game was coded with C# in Unity.
            </p>
        </main>
    );
}