'use client'

export default function GTK() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">GoG Comm Site</h1>

            <video width="800" height="338" controls autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/gogcomm/gogcomm-site.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="max-w-[600px] mx-auto">
                Built to serve an online community, this site showcases slick, organic-feeling moving features. 
                Coded using NextJS, GoG Comm also hosts its own contact form and account registration. 
                Admin users can create events, and all users can make changes to their own accounts as needed.
            </p>
        </main>
    );
}