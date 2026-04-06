'use client'
import Link from "next/link";

export default function Resume() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Resume</h1>

            <Link href="/ruston-coffee.png" download
                alt="a circular logo of a fictitious coffee shop"
                className="button mx-auto block w-fit my-3"
            >
                Download
            </Link>

            <div className="intro-section">
                <div className="intro-text">
                    <h2>Holly M. Phillips</h2>
                    <a href="tel:+19364251225" alt="phone number: 936-425-1225">(936) 425-1225</a>
                    <a href="mailto:hollymphillips.dev@gmail.com?subject=Hello Holly!&body=I'd love to connect with you..." alt="email address: hollymphillips.dev@gmail.com">hollymphillips.dev@gmail.com</a>
                    <a href="https://www.linkedin.com/in/hooleymcknight/" target="_blank" alt="linkedin profile">LinkedIn Profile</a>
                    <a href="https://www.github.com/hooleymcknight/" target="_blank" alt="github profile">GitHub Profile</a>
                </div>

                <div className="resume-img block mx-auto w-fit">
                    <img className="img" src="/brick-grey.png" width={320} height={320} alt="Holly standing in front of a brick wall with an open smile" />
                    <img className="img-hover" src="/brick-color.jpg" width={320} height={320} alt="Holly standing in front of a brick wall with an open smile" />
                </div>
            </div>

            {/* <img
                width="800" height="450" className="mx-auto my-8"
                src="/projects/tierator/tierator_v2.gif"
                alt="gif of the Tierator site, moving and adding entries"
            /> */}

            <p className="max-w-[600px] mx-auto">
                
            </p>
        </main>
    );
}