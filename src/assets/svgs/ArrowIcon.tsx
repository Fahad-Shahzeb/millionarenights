import * as React from "react"
import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> {
    size?: number
}
const ArrowIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size ? `${props.size}em` : "1.5em"}
        height={props.size ? `${props.size}em` : "1.5em"}
        fill="none"
        {...props}
        viewBox="0 -2 12 12"
    >
        <path
            stroke={props.color ?? "#fff"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M1.52 1.333 6.187 6l4.667-4.667"
        />
    </svg>
)
export { ArrowIcon }
