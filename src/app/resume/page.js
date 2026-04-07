'use client'
import Image from "next/image";
import Link from "next/link";

import { ref, 'Contact Info' as contacts } from '@/app/data/resume.json'; 

export default function Resume() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Resume</h1>

            <Link href={ref.downloadHref} download
                alt="a circular logo of a fictitious coffee shop"
                className="button mx-auto block w-fit my-3"
            >
                Download
            </Link>

            <div className="intro-section flex flex-row flex-row-reverse mx-auto my-8 max-w-[600px] gap-8">
                <div className="intro-text grow-[0.75] flex flex-col">
                    <h2>{contacts.name}</h2>
                    {
                        Object.keys(contacts).filter(x => typeof(contacts[x]) === 'object').map(x => 
                            <Link key={contacts[x].text}
                                className="hover:underline"
                                href={contacts[x].href}
                                alt={contacts[x].alt}
                                target="_blank"
                            >
                                {contacts[x].text}
                            </Link>
                        )
                    }
                </div>

                <div className="resume-img block mx-auto w-fit max-w-[200px]">
                    <Image priority className="img" src={ref.selfImage} width={320} height={320} alt={ref.selfImageAlt} />
                    <Image priority className="img-hover" src={ref.selfImageHover} width={320} height={320} alt={ref.selfImageHoverAlt} />
                </div>
            </div>

            <p className="max-w-[600px] mx-auto">
                
            </p>
        </main>
    );
}