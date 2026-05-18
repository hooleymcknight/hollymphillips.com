'use client'
import { useState, useEffect } from 'react';
import domtoimage from 'dom-to-image';
import '../../styles/medTool.css'

const times = [...Array(24).keys()];
const days = Array.from({ length: 11 }, (_, i) => i + 1); // wait, why 11? is this jsut when they all will be looping?

export default function MedTool() {
    const [hoursGap, setHoursGap] = useState(8);
    const [startingTime, setStartingTime] = useState(0);
    const [startingDate, setStartingDate] = useState();
    const [title, setTitle] = useState();

    const [repeatableDays, setRepeatableDays] = useState(1);
    const [allHoursToMedicate, setAllHoursToMedicate] = useState({});

    const startingDateHandler = (value) => {
        let date = new Date(value.replace(/-/g, '/')).toLocaleDateString('en-US', {
            month: "numeric", day: "numeric"
        });
        setStartingDate(date);
    }

    const exportToImage = () => {
        const output = document.getElementById('output-section');
        output.classList.add('exporting');
        domtoimage.toPng(output)
        .then(function (dataUrl) {
            // remove lingering things from the last time
            Array.from(document.body.childNodes).filter(x => x.nodeName === 'IMG').forEach((node) => {
                node.remove();
            })
            if (document.getElementById('download-automatically')) {
                document.getElementById('download-automatically').remove();
            }

            // add new image and download button
            const img = new Image();
            img.src = dataUrl;
            img.classList.add('export-image');
            document.body.appendChild(img);

            const imageTitle = title ? title : 'med-feeding-times-table';

            const a = document.createElement('a');
            a.id = 'download-automatically';
            a.setAttribute('href', dataUrl);
            a.setAttribute('download', imageTitle);
            document.body.appendChild(a);
        })
        .then(function() {
            output.classList.remove('exporting');
            document.getElementById('download-automatically').click();
        })
        .catch(function (error) {
            return error;
        });
    }

    useEffect(() => {
        for (let i=1; i<12; i++) {
            if ((24 * i) % hoursGap === 0) {

                let hoursToMedicate = [];
                for (let n=Number(startingTime); n<(24*i); n++) {
                    if (Number(n - startingTime) % hoursGap === 0) {
                        hoursToMedicate.push(n);
                    }
                }
            
                let newHours = { '1': [] };
                hoursToMedicate.forEach((hour) => {
                    if(hour < 24) {
                        newHours['1'].push(hour);
                    }
                    else {
                        let newHour = hour;
                        let day = 1;
                        while (newHour >= 24) {
                        newHour = newHour - 24;
                        day++;
                        if(!newHours[`${day}`]) {
                            newHours[`${day}`] = [];
                        }
                        }
                        newHours[`${day}`].push(newHour);
                    }
                })
                
                setRepeatableDays(i);
                setAllHoursToMedicate(newHours);
                break;
            }
        }
    }, [hoursGap, startingTime]);

    return (
        <main className="max-w-[1000px] mx-auto">
            <div className="med-tool-selectors">
                <div className="med-selector  my-2">
                    <label htmlFor="hours-gap">Hours Between Doses:</label>
                    <div className="flex flex-row items-center gap-2">
                        <input type="range" name="hours-gap" min="3" max="12" onChange={(e) => {setHoursGap(e.target.value)}} defaultValue={hoursGap} />
                        <span className="text-lg">{hoursGap}</span>
                    </div>
                </div>
                <div className="med-selector flex flex-row flex-wrap my-2">
                    <label htmlFor="starting-time">Starting Time:</label>
                    <div>
                        <select id="starting-time" defaultValue={startingTime}
                            onChange={(e) => {setStartingTime(e.target.value)}}
                            className="bg-[#ffffff66] rounded-[4px] border-[1px] mx-2 px-1"
                        >
                            {times.map(x =>
                            <option key={x} value={x}>{`${x}:00`}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="med-selector flex flex-row flex-wrap my-2">
                    <label htmlFor="starting-date">Starting Date:</label>
                    <input type="date" id="starting-date"
                        onChange={(e) => {startingDateHandler(e.target.value)}}
                        className="bg-[#ffffff66] rounded-[4px] border-[1px] mx-2 px-1"
                    />
                </div>
                <div className="med-selector flex flex-row flex-wrap my-2">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title"
                        onChange={(e) => {setTitle(e.target.value)}}
                        className="bg-[#ffffff66] rounded-[4px] border-[1px] mx-2 px-1"
                    />
                </div>
            </div>

            <button className="button button-inverse mt-8" onClick={exportToImage}>Export</button>

            <div id="output-section" className="py-8">
                {title ? <h2 className="mb-4 mx-2">{title}</h2> : ''}

                <div className="output-times flex flex-row flex-wrap">

                    {[...days].slice(0, repeatableDays).map((dayNumber) => 
                        <table key={dayNumber} className={`day-section min-w-[200px] border-[2px] m-2`}>
                            <tbody>
                                <tr className="border-b-[2px] border-[var(--foreground)]">
                                    { startingDate ? 
                                        <th className="text-left px-2">
                                            <h3 className="font-bold text-xl">
                                                Day {dayNumber} - {`${new Date(new Date(startingDate).setDate(new Date(startingDate).getDate() + (dayNumber - 1))).toLocaleDateString('en-US', {month: "numeric", day: "numeric"})}`}
                                            </h3>
                                        </th>
                                    :
                                        <th className="text-left px-2">
                                            <h3 className="font-bold text-xl">Day {dayNumber}</h3>
                                        </th>
                                    }
                                </tr>
                                { times.map(x =>
                                    <tr key={x} data-x={x}
                                        data-active={allHoursToMedicate[`${dayNumber}`]?.includes(x) || "false"}
                                        className={`time-slot
                                            ${allHoursToMedicate[`${dayNumber}`]?.includes(x) ? 'bg-[var(--foreground)] text-[var(--background)]' : ''}
                                        `}
                                    >
                                        <td className="px-2">
                                            <span>{`${x}:00`}</span>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        // <div key={i} className="day-section min-w-[200px]">
                        //     {times.map(x =>
                        //         <div key={x} className="time-slot" data-x={x}
                        //             data-active={allHoursToMedicate[`${i}`] ? allHoursToMedicate[`${i}`].includes(x) : "false"}>
                        //             {`${x}:00`}
                        //         </div>
                        //     )}
                        // </div>
                    )}
                </div>
            </div>

            <div className="download-section">
                <a href="" download></a>
            </div>
        </main>
    );
}