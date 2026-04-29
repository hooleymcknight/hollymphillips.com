/**
 * when you need client components in here, make those the child elements. import them into here.
 * the parent must be server.
 */

import Image from "next/image";
import Link from "next/link";

// reference:
// https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/2655288/palm-v-56-1020.1349135797.jpg?quality=90&strip=all

export default function AppTile(props) {
    // console.log(typeof(props.link))
    const link = typeof(props.link) == 'string' ? props.link : '#';

    return (
        <Link href={link} className="app-tile-anchor mx-auto flex flex-col justify-start items-center my-4 gap-y-4"
            target={props.target ? props.target : "_self"}
        >
            <div className="app-image-container w-[100px] h-[100px] relative">
                <Image 
                    className="app-image absolute top-0 left-0"
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    width={100}
                    height={100}
                    priority
                />
                <Image
                    className="app-image-hover absolute top-0 left-0"
                    src={props.hoverSrc}
                    alt={props.imageAlt}
                    width={100}
                    height={100}
                    priority
                />
            </div>
            <span className="text-center leading-tight">{props.name}</span>
        </Link>
    );
}