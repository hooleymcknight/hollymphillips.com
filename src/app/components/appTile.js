/**
 * when you need client components in here, make those the child elements. import them into here.
 * the parent must be server.
 */

import Image from "next/image";
import Link from "next/link";

// reference:
// https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/2655288/palm-v-56-1020.1349135797.jpg?quality=90&strip=all

export default function AppTile(props) {
    return (
        <Link href={props.link} className="mx-auto flex flex-col justify-center items-center my-4">
            <Image 
                className=""
                src={props.imageSrc}
                alt={props.imageAlt}
                width={100}
                height={100}
                priority
            />
            <span>{props.name}</span>
        </Link>
    );
}
