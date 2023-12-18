import React, { useState } from 'react';
import { Globe_PNG } from '../assets';

const CircularAnimation = () => {
    const [isMovingUp, setIsMovingUp] = useState(false);

    const handleMouseMove = (e: any) => {
        setIsMovingUp(e.movementY < 0);
    };

    return (
        <div className='h-[800px]'>
            <div className='relative w-full h-full' onMouseMove={handleMouseMove}>
                <img
                    src={Globe_PNG}
                    alt="Planet"
                    className={`absolute top-[50px] w-80 transition-transform duration-300 ease-in-out transform ${isMovingUp ? 'translate-y-[-12px]' : 'translate-y-0'}`}
                />
            </div>
        </div>
    );
};

export { CircularAnimation };
