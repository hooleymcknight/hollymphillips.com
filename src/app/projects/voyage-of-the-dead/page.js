'use client'

export default function VOTD() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Voyage of the Dead</h1>

            <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/wZgo2fRxUfo?si=ZmxEhvgOPXM0ePSs&autoplay=1&mute=1"
                className="mx-auto mt-8"
                title="YouTube video player: Voyage of the Dead"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            >
            </iframe>
            <small className="block max-w-[800px] text-right mx-auto mt-1 mb-8">This video does not belong to me.</small>

            <p className="max-w-[600px] mx-auto">
                Voyage of the Dead was my main video game project during my time with Gaming Corps Austin in 2018. 
                My role was Developer Support / QA Lead. I managed the entire QA process for VOTD. 
                I also coded the lobby fidgets, the kraken boss fight towards the end of the game, and other various combat encounters. 
                This game was coded with C++ in Unreal Engine 4.
            </p>
        </main>
    );
}