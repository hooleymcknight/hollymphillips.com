'use client'
import Image from "next/image";
import Link from "next/link";
import { createMarkup } from "../helpers/helpers";
import { exportPDF } from "../helpers/exportPDF";

import resumeData from '@/app/data/resume.json';

const ref = resumeData.ref;
const contacts = resumeData['Contact Info'];
const summary = resumeData['Summary'];
const work = resumeData['Work Experience'];
const skills = resumeData['Skills'];
const education = resumeData['Education'];
const projects = resumeData['Projects'];


import WorkEntry from "../components/workEntry";
import SkillSection from "../components/skills";
import ProjectEntry from "../components/projectEntry";

export default function Resume() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Resume</h1>

            <button
                className="button mx-auto block w-fit my-3"
                style={{ paddingTop: '4px', paddingBottom: '4px', }}
                onClick={exportPDF}
            >
                Download PDF
            </button>

            <div id="resume-content">
                <div id="intro-section" className="flex flex-row flex-row-reverse mx-auto my-8 max-w-[500px] gap-8">
                    <div className="grow-[0.75] flex flex-col">
                        <h2>{contacts.name}</h2>
                        <p>{contacts.location}</p>
                        {
                            Object.keys(contacts).filter(x => typeof(contacts[x]) === 'object').map(x => 
                                <Link key={contacts[x].text}
                                    className="underline decoration-dotted hover:decoration-solid underline-offset-4 font-[family-name:var(--font-cabin)]!"
                                    href={contacts[x].href}
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

                <div id="summary" className="max-w-[600px] mx-auto mt-6 font-[family-name:var(--font-cabin)]">
                    {summary}
                </div>

                <div className="lined max-w-[600px] mx-auto mb-6"><span className="w-full">&nbsp;</span></div>

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

                <div id="projects" className="max-w-[600px] mx-auto mb-8">
                    <h2 className="mb-2">Projects</h2>
                    {projects.map(x =>
                        <div key={x.name} className="mb-4">
                            <ProjectEntry entry={x} />
                        </div>
                    )}
                </div>

                <div id="education" className="max-w-[600px] mx-auto mb-8">
                    <h2 className="mb-2">Education</h2>
                    {education.map((x, index) =>
                        <p key={index} className="font-[family-name:var(--font-cabin)]!" dangerouslySetInnerHTML={createMarkup(x)}></p>
                    )}
                </div>
            </div>

        </main>
    );
}