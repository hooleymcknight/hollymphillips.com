import AppTile from "./appTile";

export default function AppTileGrid(props) {
    let data = props.data;

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 justify-center font-sans w-full">
            {
                Object.keys(data).map(x => 
                    <AppTile
                        key={x}
                        link={data[x]?.link || '#'}
                        imageSrc={data[x]?.imageSrc || ''}
                        imageAlt={data[x]?.imageAlt || ''}
                        hoverSrc={data[x]?.hoverSrc || ''}
                        name={x}
                        target={data[x]?.target || null}
                    />
                )
            }
        </div>
    );
}