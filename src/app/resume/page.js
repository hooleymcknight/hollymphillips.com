'use client'
import Image from "next/image";
import Link from "next/link";

const contacts = {
    'name': 'Holly M. Phillips',
    'cell': {
        'href': 'tel+19364251225',
        'alt': 'phone number: 936-425-1225',
        'text': '(936) 425-1225'
    },
    'email': {
        'href': 'mailto:hollymphillips.dev@gmail.com?subject=Hello Holly!&body=I\'d love to connect with you...',
        'alt': 'email address: hollymphillips.dev@gmail.com',
        'text': 'hollymphillips.dev@gmail.com'
    },
    'linkedin': {
        'href': 'https://www.linkedin.com/in/hooleymcknight/',
        'alt': 'linkedin profile',
        'text': 'LinkedIn Profile'
    },
    'github': {
        'href': 'https://www.github.com/hooleymcknight/',
        'alt': 'github profile',
        'text': 'GitHub Profile'
    }
}

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

            <div className="intro-section flex flex-row flex-row-reverse mx-auto my-8 max-w-[600px] gap-8">
                <div className="intro-text grow-[0.75] flex flex-col">
                    <h2>{contacts.name}</h2>
                    {
                        Object.keys(contacts).filter(x => typeof(contacts[x]) === 'object').map(x => 
                            <Link className="hover:underline" key={contacts[x].text} href={contacts[x].href} alt={contacts[x].alt}>{contacts[x].text}</Link>
                        )
                    }
                </div>

                <div className="resume-img block mx-auto w-fit max-w-[200px]">
                    <Image className="img" src="/brick-grey.png" width={320} height={320} alt="Holly standing in front of a brick wall with an open smile" />
                    <Image className="img-hover" src="/brick-color.jpg" width={320} height={320} alt="Holly standing in front of a brick wall with an open smile" />
                </div>
            </div>

            <p className="max-w-[600px] mx-auto">
                
            </p>
        </main>
    );
}