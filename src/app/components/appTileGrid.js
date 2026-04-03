import AppTile from "./appTile";

export default function AppTileGrid(props) {
    let data = props.data;

    return (
        <>
            {
                Object.keys(data).map(x => 
                    <AppTile
                        key={x}
                        link={data[x]?.link || '#'}
                        imageSrc={data[x]?.imageSrc || ''}
                        imageAlt={data[x]?.imageAlt || ''}
                        hoverSrc={data[x]?.hoverSrc || ''}
                        name={x}
                    />
                )
            }
        </>
    );
}