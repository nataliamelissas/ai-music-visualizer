'use client';
import {useEffect, useRef, useState} from 'react';
import p5 from 'p5';

export default function Canvas(note) {
    const canvasRef = useRef(null);
    const [color, setColor] = useState([0, 155, 50]);

    const canvasWidth = 800;
    const canvasHeight = 400;

    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(canvasWidth, canvasHeight);
                p.clear();
            };
            p.draw = () => {
                p.clear(); // Clear the canvas on each frame
                let xPos = 0;
                if (note) {
                    xPos = mapNote(note);
                }
                p.fill(color);
                p.ellipse(xPos + 75, canvasHeight / 2, 100, 100);
            };
            return () => {
                canvas.remove();
            };
        }

        const mapNote = (note) => {
            const spacing = canvasWidth / 13;
            const notePositions = {
                C: 0 * spacing,
                "C#": 1 * spacing,
                D : 2 * spacing,
                "D#": 3 * spacing,
                E : 4 * spacing,
                F : 5 * spacing,
                "F#": 6 * spacing,
                G : 7 * spacing, 
                "G#": 8 * spacing,
                A : 9 * spacing,
                "A#": 10 * spacing,
                B : 11 * spacing,
            }

            return notePositions[note] || 0;
        }
        
        const canvas = new p5(sketch, canvasRef.current);
    }, [note, color]);

    return (
        <div ref={canvasRef} className='bg-amber-50'>
            
        </div>
    )
}
