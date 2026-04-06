'use client'

export default function Spooterfi() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Spooterfi</h1>

            <video width="800" height="338" controls autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/gogcomm/gogcomm-site.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="max-w-[600px] mx-auto">
                .
            </p>
        </main>
    );
}