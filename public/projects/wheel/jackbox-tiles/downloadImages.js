// Source - https://stackoverflow.com/a/11944984
// Posted by Michelle Tilley, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-29, License - CC BY-SA 4.0

const http = require('http'); // or 'https' for https:// URLs
const https = require('https');
const fs = require('fs');

const urls = [
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/drawful.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/word-spud.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/lie-swatter.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/fibbage-xl.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/you-dont-know-jack-2015.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/bidiots.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/earwax.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/bomb-corp.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/fibbage-2.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/quiplash-xl.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/guesspionage.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/fakin-it.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/tee-ko.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/trivia-murder-party.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/quiplash-2.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/survive-the-internet.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/fibbage-3.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/civic-doodle.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/bracketeering.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/monster-seeking-monster.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/patently-stupid.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/split-the-room.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/mad-verse-city.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/you-dont-know-jack.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/zeeple-dome.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/push-the-button.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/joke-boat.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/dictionarium.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/role-models.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/trivia-murder-party-2.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/the-devil-in-the-details.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/quiplash-3.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/champd-up.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/blather-round.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/talking-points.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/drawful-animate.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/the-wheel-of-enormous-proportions.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/job-job.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/poll-mine.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/weapons-drawn.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/fibbage-4.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/quixort.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/roomerang.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/junktopia.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/nonsensory.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/tee-ko-2.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/timejinx.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/fixy-text.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/dodo-re-mi.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/hypnotorious.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/fakin-it-all-night-long.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/dirty-drawful.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/let-me-finish.png"
];

const urls2 = [
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/dirty-drawful.png",
    "https://web.archive.org/web/20250419225153im_/https://hooleymcknight.com/jackbox-wheel/jackbox-tiles/let-me-finish.png"
];

// for (const url of urls2) {
//     https.get(url, (res) => {
//         const fileName = url.split('jackbox-tiles/')[1];
//         const file = fs.createWriteStream(fileName);
        
//         res.pipe(file);

//         // after download completed close filestream
//         file.on("finish", () => {
//             file.close();
//             console.log("Download Completed");
//         });
//     })
//     .on('error', (err) => {
//         console.log('error', err.message);
//     })
// }


async function downloadFile (url, targetFile) {  
    return await new Promise((resolve, reject) => {
        https.get(url, response => {
            const code = response.statusCode ?? 0

            if (code >= 400) {
                console.log(response.statusMessage);
                return resolve(false);
            }

            // handle redirects
            if (code > 300 && code < 400 && !!response.headers.location) {
                return resolve(
                    downloadFile(response.headers.location, targetFile)
                )
            }

            // save the file to disk
            const fileWriter = fs.createWriteStream(targetFile)
            .on('finish', () => {
                resolve({})
            });

            response.pipe(fileWriter)
        }).on('error', error => {
            console.log('get error. we can skip, right?');
            resolve(false);
        })
    })
}

const downloadAll = async () => {
    for (const url of urls) {
        const fileName = url.split('jackbox-tiles/')[1];
        const result = await downloadFile(url, fileName);
        if (!result) {
            console.log('* -- could not fetch:', fileName);
        }
        else {
            // console.log(result);
            console.log('Downloaded:', fileName);
        }
    }
}

downloadAll();