'use client'

export default function EDHREC() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">EDHREC Importer</h1>
            <h4 className="text-center">Mozilla Firefox Add-On</h4>

            <video width="800" height="338" controls autoPlay={true} muted loop className="mx-auto my-8">
                <source src="/projects/edhrec-importer/edhrec-importer-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="max-w-[600px] mx-auto mb-16">
                <p>
                    Quickly import a list of MTG cards into your EDHREC clipboard instead of looking them up one at a time. 
                    Paste a deck list, click submit, and the cards appear in your EDHREC clipboard ready for recommendations.
                    <br/><br/>
                    <b>Features:</b>
                </p>
                <ul className="list-[square] pl-[1.5rem] mt-2">
                    <li className="pl-[0.4rem]">Paste commanders in one field and the rest of your deck in another</li>
                    <li className="pl-[0.4rem]">Submits to EDHREC's existing public card lookup API to resolve card names</li>
                    <li className="pl-[0.4rem]">Cards that EDHREC doesn't recognize are reported back to you</li>
                    <li className="pl-[0.4rem]">Enforces MTG deck limits (2 commanders, 100 cards total) and tells you which ones were dropped</li>
                    <li className="pl-[0.4rem]">Drafts auto-save as you type, so if you tab away and the popup closes, your list is still there when you reopen it</li>
                    <li className="pl-[0.4rem]">Discard your saved draft anytime to start fresh</li>
                </ul>
                <p>
                    <br/>
                    Works only on edhrec.com. No data is collected or transmitted anywhere except EDHREC's own API.
                </p>
            </div>
            
        </main>
    );
}