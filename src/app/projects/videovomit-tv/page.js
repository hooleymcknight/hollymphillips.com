'use client'

export default function videovomitTv() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">videovomit.tv</h1>

            <video width="800" height="338" controls autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/vvtv/vvtv-coming-soon.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="max-w-[600px] mx-auto">
                Built using NextJS, videovomit.tv is a website for content creator videovomit. This 
                site is the central location for all of his online content, including an extensive 
                video archive (hosted on YouTube), videovomit merchandise (sold through Fourth Wall), 
                leaderboards for community games, an admin-updatable display of played games (using MySQL + PrismaDB), 
                podcasts, and much more. Site users can authenticate and interact with the site using 
                either email or Twitch account.
            </p>
        </main>
    );
}