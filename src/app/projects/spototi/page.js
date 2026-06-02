'use client'

export default function Spototi() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Spototi</h1>
            <h4 className="text-center">React Native App</h4>

            <video width="800" height="338" controls autoPlay={true} loop muted className="mx-auto my-8">
                <source src="/projects/spooterfi/spooterfi-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="max-w-[600px] mx-auto mb-16">
                description placeholder.
                the above video is not of this app.
            </p>
        </main>
    );
}