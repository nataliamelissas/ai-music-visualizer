'use client';
import { useState } from "react";
import Canvas from "./canvas";

const scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export default function Notes() {
    const [detectedNote, setDetectedNote] = useState("C");

    return (
        <div>
            <p>Detected Note: {detectedNote}</p>
            <Canvas />
        </div>
    )
}