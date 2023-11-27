import * as React from "react"
import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> {
    size?: number
}
const USDTIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size ? `${props.size}em` : "1.5em"}
        height={props.size ? `${props.size}em` : "1.5em"}
        {...props}
        viewBox="-2 -3 22 22"
        style={{ backgroundColor: '#53AE94', padding: 4, borderRadius: 100 }}
    >
        <path
            fill="#fff"
            d="M10.728 6.135V4.052h4.763V.879H2.522v3.173h4.764v2.081C3.415 6.311.504 7.077.504 7.996c0 .918 2.912 1.685 6.782 1.864v6.67h3.444V9.86c3.864-.18 6.768-.945 6.768-1.863 0-.917-2.905-1.683-6.769-1.862m0 3.16v-.002c-.097.006-.596.036-1.707.036-.89 0-1.514-.026-1.735-.037v.003c-3.42-.152-5.972-.747-5.972-1.46s2.553-1.307 5.972-1.459v2.325c.224.016.865.054 1.75.054 1.061 0 1.595-.045 1.693-.054V6.376c3.413.152 5.96.748 5.96 1.458s-2.548 1.307-5.96 1.459"
        />
    </svg>
)
export { USDTIcon }
