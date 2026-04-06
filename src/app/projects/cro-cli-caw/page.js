'use client'

export default function CAW() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">CRO CLI Tool / CAW App</h1>

            <video width="800" height="450" controls autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/caw/caw-test1.mkv" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="max-w-[600px] mx-auto">
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