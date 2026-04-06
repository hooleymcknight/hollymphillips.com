'use client'

export default function Tierator() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Tierator</h1>

            <img
                width="800" height="450" className="mx-auto my-8"
                src="/projects/tierator/tierator_v2.gif"
                alt="gif of the Tierator site, moving and adding entries"
            />

            <p className="max-w-[600px] mx-auto">
                Tierator was a website that enabled users to create a tier table (as shown above) 
                with easy-to-use drag and drop features and image export capabilities. This site was 
                built using VueJS.
            </p>
        </main>
    );
}