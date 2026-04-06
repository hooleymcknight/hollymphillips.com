'use client'

export default function Spooterfi() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Spooterfi</h1>

            <video width="800" height="338" controls autoPlay={true} loop muted className="mx-auto my-8">
                <source src="/projects/spooterfi/spooterfi-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="max-w-[600px] mx-auto">
                Spooterfi was custom-built for a friend after a community project broke and wasn't repaired. 
                This app connects with the user's Spotify account, pulls the Now Playing data, and inserts that 
                information into a local .txt file for the user to display on their Twitch stream through OBS. 
                The app updates its own access and refresh tokens as needed after initial authorization. 
                The user can set the .txt file locations in the settings.
            </p>
        </main>
    );
}