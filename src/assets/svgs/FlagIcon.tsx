import * as React from "react"
import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> {
    size?: number
}
const FlagIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size ? `${props.size}em` : "1.5em"}
        height={props.size ? `${props.size}em` : "1.5em"}
        fill="none"
        {...props}
        viewBox="0 0 30 30"
    // style={{ backgroundColor: 'red' }}
    >
        <path
            fill="url(#a)"
            d="M2.444 17.684V24H0V0h23.388c.107 0 .212.029.305.084.093.055.17.134.224.23a.648.648 0 0 1 .002.63l-4.366 7.898 4.366 7.897a.647.647 0 0 1-.226.861.596.596 0 0 1-.305.084H2.444Zm0-15.158v12.632H20.23l-3.493-6.316 3.493-6.316H2.444Z"
        />
        <defs>
            <linearGradient
                id="a"
                x1={12}
                x2={12}
                y1={24.001}
                y2={0}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#775CF4" />
                <stop offset={1} stopColor="#C85EF7" />
            </linearGradient>
        </defs>
    </svg>
)
export { FlagIcon }
