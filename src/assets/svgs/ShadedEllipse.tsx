import * as React from "react"
import { SVGProps } from "react"
const ShadedEllipse = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5em"
        height="5em"
        fill="none"
        viewBox="0 0 100 100"
        {...props}
    >
        <g
            filter="url(#a)"
            style={{
                mixBlendMode: "screen",
            }}
        >
            <circle
                cx={44}
                cy={40}
                r={40}
                fill="url(#b)"
                shapeRendering="crispEdges"
            />
        </g>
        <defs>
            <radialGradient
                id="b"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(0 40 -40 0 44 40)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0} />
                <stop offset={0.714} stopOpacity={0} />
                <stop offset={1} stopColor="#5318D1" />
            </radialGradient>
            <filter
                id="a"
                width={88}
                height={88}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_98_202" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_98_202"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
export { ShadedEllipse }
