export default function PrivacyPolicyShell(props) {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">{props.title}</h1>

            <p className="max-w-[600px] mx-auto">
                {props.policy}
            </p>
        </main>
    );
}