/**
 * when you need client components in here, make those the child elements. import them into here.
 * the parent must be server.
 */

// reference:
// https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/2655288/palm-v-56-1020.1349135797.jpg?quality=90&strip=all

export default function Grain(props) {
    const styleText = JSON.stringify(props.style);

    return (
        <div className={`grainy-background ${props.classes}`} style={styleText ? JSON.parse(styleText) : {}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <filter id="grainy-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="4" stitchTiles="stitch"/>
                </filter>
                <rect width='100%' height='100%' filter='url(#grainy-noise)' />
            </svg>
        </div>
    );
}