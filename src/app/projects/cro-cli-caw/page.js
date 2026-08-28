'use client'

import StatusBadge from "@/app/components/projects/statusBadge";

export default function CAW() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">CRO CLI Tool / CAW App</h1>
            <h4 className="text-center">NodeJS Script / NextJS Website</h4>

            <img
                width="800" height="450" className="mx-auto my-8"
                src="/projects/caw/cro-cli.gif"
                alt="gif of the CRO CLI tool in action, generating files for an A/B test"
            />

            <StatusBadge status="Archived" notes="CLI complete, CAW app retired" />

            <p className="max-w-[600px] w-full text-[18px] mx-auto mb-16">
                After working in CRO for several years, I decided to build my own CRO tools for personal and contract use. 
                The first tool I built was a command line interface tool that quickly generates code templates based on the 
                client's information and the number of variations in the test.
                <br/><br/>
                Additionally, I built a standalone web application to run CRO tests and analyze data. This app, called 
                Conversion and Acquisition Watcher (CAW), stores client and test data in a secure database, which it references 
                to run the A/B tests on page load.
            </p>
        </main>
    );
}