'use client'
import PrivacyPolicyShell from "@/app/components/privacyPolicyShell";

let title = 'EDHREC Importer — Privacy Policy';
let policy = `This extension does not collect, store, or transmit any personal data.
    When you submit a list of card names, the extension sends those names to edhrec.com's public card lookup endpoint (/api/cards/) to resolve them to canonical card identifiers. This is the same request edhrec.com makes when you use its website directly. No personally identifying information is included in this request.
    Card lists and draft text are saved locally in your browser's extension storage so your work isn't lost between popup opens. This data never leaves your computer.
    The extension does not use analytics, tracking, advertising, or any third-party services beyond edhrec.com itself.`;

export default function edhrecImporterPrivacyPolicy() {

    return (
        <PrivacyPolicyShell title={title} policy={policy} />
    );
}