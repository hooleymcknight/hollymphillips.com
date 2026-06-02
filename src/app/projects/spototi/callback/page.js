// import { GetServerSideProps } from "next";

export const getServerSideProps = async ({ query, res }) => {
    const qs = new URLSearchParams(query).toString();
    res.writeHead(302, { Location: `spototi://callback${qs ? '?' + qs : ''}`});
    res.end();
    return { props: {} };
}

export default function SpototiCallback() {
    return null;
}