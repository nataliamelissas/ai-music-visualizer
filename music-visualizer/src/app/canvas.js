'use client';
import {useRef, useState} from 'react';

export default function Canvas() {
    const canvasRef = useRef(null);
    const [color, setColor] = useState([0, 0, 255]);

    const canvasWidth = 800;
    const canvasHeight = 400;

    return (
        <div ref={canvasRef} className='bg-amber-50'>
            
        </div>
    )
}
