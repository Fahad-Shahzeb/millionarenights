import * as React from "react"
import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> {
    size?: number
}
const LeftRightIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size ? `${props.size}em` : "1.5em"}
        height={props.size ? `${props.size}em` : "1.5em"}
        fill="none"
        {...props}
        viewBox="0 0 38 38"
    >
        <mask
            id="a"
            width={24}
            height={39}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <path
                fill="#fff"
                d="M8.493 19.17 23.36 4.26 19.113 0 0 19.17l19.113 19.168 4.246-4.259-14.866-14.91Z"
            />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#5318D1"
                d="M13.307 19.17 25.695 6.693 22.157 3.13 6.229 19.17l15.928 16.039 3.538-3.564-12.388-12.476Z"
            />
        </g>
    </svg>
)
export { LeftRightIcon }
