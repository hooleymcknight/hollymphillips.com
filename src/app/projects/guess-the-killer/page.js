'use client'

export default function GTK() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Guess the Killer App</h1>

            <video width="800" height="338" controls autoPlay={true} muted loop className="mx-auto my-8">
                <source src="/projects/gtk/gtk-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="max-w-[600px] mx-auto">
                The Guess the Killer app is one of the most time-saving applications I've built for someone. It is estimated to 
                save anywhere between a cumulative 32 minutes to 1.5 hours per 8-hour stream.
                <br/><br/>
                A friend and content creator known as videovomit hosts a game on his Twitch channel while streaming Dead by Daylight: 
                Guess the Killer. Viewers can participate by voting for who they think the killer of the next match will be, 
                and the winner (if any) will receive a free Steam game from videovomit. 
                <br/><br/>
                This game used to be played by vv's use of a .txt file. Viewers would just state in chat who they thought the killer would be, 
                and vv would manually go through and pick out the votes and type them into the .txt file, which would then display on screen. 
                I saw this as a great opportunity to create a Twitch chat bot and desktop application to help save vv a lot of time and effort. 
                This app was built with ElectronJS, and is packaged as a desktop application. Within that desktop application, there is code 
                that connects to videovomit's Twitch chat and monitors for messages beginning with the set prefix character (!). 
                <br/><br/>
                Viewers can now type <span className="code">!vote [KILLER NAME]</span> to submit a vote. The bot/app will process the 
                name it is given, comparing it against a list of available killers and their associated nicknames (as defined by videovomit 
                in the desktop app interface). If the killer name provided is valid, then the app will automatically update the .txt file 
                that is used for the visual display in OBS.
                <br/><br/>
                The app handles its own re-authorization after the first account use permissions are accepted by videovomit. It will 
                collect its own refresh and authorization tokens. Those account use permissions do reset per Twitch API docs every 
                three months; at that time videovomit will reauthorize via the desktop application menu, and the app continues to 
                fetch its own updated authorization from there.
                <br/><br/>
                The app also allows for videovomit to enter in new killers as they are added to the game, and to update and edit 
                accepted killer nicknames. There are buttons to open and close the voting, and an additional button to clear out the 
                existing votes (used at the end of a round).
            </p>
        </main>
    );
}