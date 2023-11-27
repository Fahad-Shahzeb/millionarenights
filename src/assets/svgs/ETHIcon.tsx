import * as React from "react"
import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> {
    size?: number
}
const ETHIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size ? `${props.size}em` : "1.5em"}
        height={props.size ? `${props.size}em` : "1.5em"}
        {...props}
        viewBox="-1 0 20 20"
        style={{ backgroundColor: '#1181E8', borderRadius: 100, padding: 3 }}
    >
        <g clipPath="url(#a)">
            <path
                fill="#fff"
                d="m8.96 13.178-5.156-3.043 5.154 7.266 5.16-7.266-5.16 3.043h.003ZM9.038.6 3.882 9.156l5.155 3.049 5.157-3.046L9.037.6Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.6.6h16.8v16.8H.6z" />
            </clipPath>
        </defs>
    </svg>
)
export { ETHIcon }
