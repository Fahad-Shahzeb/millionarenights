// import React, { useEffect, useRef } from 'react';
// import { Globe_PNG } from '../assets';

// const CircularAnimation: React.FC = () => {
//     const pathRef = useRef<SVGPathElement>(null);
//     const pngRef = useRef<HTMLImageElement>(null);

//     const calculateEllipsePoint = (centerX: number, centerY: number, radiusX: number, radiusY: number, angle: number) => {
//         const x = centerX + radiusX * Math.cos(angle);
//         const y = centerY + radiusY * Math.sin(angle);
//         return { x, y };
//     };

//     useEffect(() => {
//         const path = pathRef.current;
//         const png = pngRef.current;

//         if (path && png) {
//             let currentAngle = 0;
//             // const centerX = 900;
//             // const centerY = 330; // Center of the ellipse
//             // const radiusX = 700;
//             // const radiusY = 300;
//             const centerX = 900;
//             const centerY = 600; // Center of the ellipse
//             const radiusX = 1000;
//             const radiusY = 500;

//             // Animate the PNG along the horizontal semi-ellipse path
//             const animate = () => {
//                 const { x, y } = calculateEllipsePoint(centerX, centerY, radiusX, radiusY, currentAngle);
//                 png.style.left = `${x}px`;
//                 png.style.top = `${y}px`;

//                 currentAngle += (Math.PI * 1) / 150; // Increment angle for animation speed

//                 if (currentAngle <= Math.PI * 2) {
//                     requestAnimationFrame(animate);
//                 } else {
//                     currentAngle = 0; // Reset animation for continuous loop
//                     requestAnimationFrame(animate);
//                 }
//             };

//             animate();
//         }
//     }, []);

//     return (
//         <div>
//             <div className=" relative py-0 bg-red-800 w-full ">
//                 <svg viewBox="0 0 1000 700" className="relative w-full h-full ">
//                     <path
//                         ref={pathRef}
//                         className='absolute left-10'
//                         d="M0,350 A500,250 0 1,0 1000,350 A500,250 0 1,0 0,350 Z"
//                         fill="none"
//                         stroke="#333"
//                         strokeWidth="1"
//                     />
//                 </svg>
//                 <img
//                     ref={pngRef}
//                     className="w-[300px] h-[300px]  absolute "
//                     src={Globe_PNG}
//                     alt="Moving PNG"
//                     draggable="false"
//                 />
//             </div>
//         </div>
//     );
// };

// export { CircularAnimation };


import React, { useEffect, useRef, useState } from 'react';
import { Globe_PNG } from '../assets';

var centerX = 0;
var centerY = 0;
var radiusX = 0;
var radiusY = 0;

const CircularAnimation: React.FC = () => {

    const pathRef = useRef<SVGPathElement>(null);
    const pngRef = useRef<HTMLImageElement>(null);

    const calculateEllipsePoint = (
        centerX: number,
        centerY: number,
        radiusX: number,
        radiusY: number,
        angle: number
    ) => {
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);
        return { x, y };
    };

    useEffect(() => {
        if (window.innerWidth >= 1920) {
            centerX = 820;
            centerY = 380;
            radiusX = 700;
            radiusY = 400;
        }
        else if (window.innerWidth <= 1024 && window.innerWidth >= 768) {

        }
        else if (window.innerWidth <= 768) {

        } else {

        }
    });

    useEffect(() => {
        const path = pathRef.current;
        const png = pngRef.current;

        if (path && png) {
            let currentAngle = 0;


            // Animate the PNG along the horizontal semi-ellipse path
            const animate = () => {
                const { x, y } = calculateEllipsePoint(centerX, centerY, radiusX, radiusY, currentAngle);
                png.style.left = `${x}px`;
                png.style.top = `${y}px`;

                currentAngle += (Math.PI * 1) / 150; // Increment angle for animation speed

                if (currentAngle <= Math.PI * 2) {
                    requestAnimationFrame(animate);
                } else {
                    currentAngle = 0; // Reset animation for continuous loop
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    }, []);

    return (
        <div className="reltive py-0  w-[85%] -ml-[0%] bg-red-200">
            <svg viewBox="0 0 1000 700" className="relative ">
                <path
                    // ref={pathRef}
                    className="absolute "
                    d="M0,350 A500,250 0 1,0 1000,350 A500,250 0 1,0 0,350 Z"
                    fill="none"
                    stroke="#333"
                    strokeWidth="1"
                />
            </svg>
            <img
                // ref={pngRef}
                className="w-[190px] h-[190px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]  right-0 transform z-50 "
                src={Globe_PNG}
                alt="Moving PNG"
                draggable="false"
            />
        </div>
    );
};

export { CircularAnimation };
