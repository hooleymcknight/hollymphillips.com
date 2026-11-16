'use client'

import StatusBadge from "@/app/components/projects/statusBadge";

export default function TwitchHUD() {

    return (
        <main className="max-w-[1000px] mx-auto">
            <h1 className="text-center">Twitch HUD</h1>
            <h4 className="text-center">Tauri Desktop Overlay</h4>

            <video width="800" height="450" controls autoPlay={true} muted className="mx-auto my-8">
                <source src="/projects/twitch-hud/twitch-hud-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <StatusBadge status="Active" notes="" />

            <p className="max-w-[600px] w-full text-[18px] mx-auto mb-16 font-[family-name:var(--font-cabin)]!">
                A desktop overlay that gives gamers the info they need without leaving the game. Built with Tauri, 
                React and TypeScript, it layers a configurable widget system over borderless-windowed games. 
                A hotkey toggles an interact mode where widgets can be created, moved and edited. The chat widget 
                reads Twitch chat live, with a full view or a popup mode that appears only when a message arrives. 
                The HUD also offers custom content widgets, intended to cut the time cost of referring to a looting 
                checklist in some games.
            </p>
        </main>
    );
}