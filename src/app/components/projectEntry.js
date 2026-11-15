import Link from "next/link";
import { createMarkup } from "../helpers/helpers";

export default function ProjectEntry (props) {
    const entry = props.entry;

    return (
        <>
            <p className="font-[family-name:var(--font-cabin)]!"><b>{entry.name},</b> {entry.stack}</p>
            <p className="font-[family-name:var(--font-cabin)]!">
                {entry.links.map((x, idx) => 
                    <>
                        <Link href={x.url} className="underline decoration-dotted hover:decoration-solid underline-offset-4 font-[family-name:var(--font-cabin)]!">{x.label}</Link>
                        {idx !== entry.links.length - 1 ? '\u00A0& ' : ''}
                    </>
                )}
            </p>
            

            <ul className="mt-1 ml-8 font-[family-name:var(--font-cabin)]!">
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