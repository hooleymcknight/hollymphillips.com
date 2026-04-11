import { createMarkup } from "../helpers/helpers";

export default function WorkEntry (props) {
    const entry = props.entry;

    return (
        <>
            <p><b>{entry.job},</b> {entry.startDate} — {entry.endDate}</p>
            <p>{entry.company}, {entry.location}</p>

            <ul className="mt-1">
                {entry.impact.map((x, index) => 
                    typeof(x) === 'string'
                    ?
                    <li key={index} dangerouslySetInnerHTML={createMarkup(x)}></li>
                    :
                    <li key={index}>
                        <span dangerouslySetInnerHTML={createMarkup(Object.keys(x)[0])}></span>
                        <ul className="sublist">
                            {Object.values(x)[0].map((y, index) => 
                                <li key={index}>{y}</li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </>
    )
}