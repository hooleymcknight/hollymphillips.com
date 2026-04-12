'use client'
import Image from "next/image";
import Link from "next/link";
import { jsPDF } from "jspdf";
import { createMarkup } from "../helpers/helpers";

import { ref, 'Contact Info' as contacts } from '@/app/data/resume.json';
import { 'Work Experience' as work, 'Skills' as skills, 'Education & Certifications' as education } from '@/app/data/resume.json';
import WorkEntry from "../components/workEntry";
import SkillSection from "../components/skills";

export default function Resume() {

    const exportPDF = () => {
        const doc = new jsPDF();
        // doc.text("Hello world!", 10, 10);
        // doc.save("a4.pdf");
        doc.text(document.querySelector('#resume-content').textContent, 10, 10);
        doc.save('resume2.pdf');
    }

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Resume</h1>

            <Link href={ref.downloadHref} download
                alt="a circular logo of a fictitious coffee shop"
                className="button mx-auto block w-fit my-3"
                style={{ paddingTop: '4px', paddingBottom: '4px', }}
            >
                Download
            </Link>

            {/* <button onClick={exportPDF}>
                pdf
            </button> */}

            <div id="resume-content">
                <div id="intro-section" className="flex flex-row flex-row-reverse mx-auto my-8 max-w-[600px] gap-8">
                    <div className="grow-[0.75] flex flex-col">
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

                <div id="skills" className="max-w-[600px] mx-auto mb-8">
                    <h2 className="mb-2">Skills</h2>
                    <SkillSection data={skills} />
                </div>

                <div id="work" className="max-w-[600px] mx-auto mb-8">
                    <h2 className="mb-2">Work Experience</h2>
                    {work.map(x =>
                        <div key={`${x.job} - ${x.company}`}
                            data-work-entry={`${x.job} - ${x.company}`}
                            className="mb-4"
                        >
                            <WorkEntry entry={x} />
                        </div>
                    )}
                </div>

                <div id="education" className="max-w-[600px] mx-auto mb-8">
                    <h2 className="mb-2">Education & Certifications</h2>
                    {education.map((x, index) =>
                        <p key={index} dangerouslySetInnerHTML={createMarkup(x)}></p>
                    )}
                </div>
            </div>

        </main>
    );
}