import React, { SVGProps } from "react";

type mode = "facebook" | "instagram" | "twitter" | "vimeo";
interface Props extends SVGProps<SVGSVGElement> {
    mode: mode;
    size?: number;
}
const SocialIcons = (props: Props) => {
    return (
        <>
            {props.mode === "facebook" && (
                <img
                    src="/assets/images/facebook.svg"
                    alt="instagram"
                    width="8px"
                    height="18px"
                    style={{
                        objectFit: "contain",
                    }}
                />
            )}
            {props.mode === "instagram" && (
                <img
                    src="/assets/images/instagram.svg"
                    alt="instagram"
                    width="20px"
                    height="20px"
                    style={{
                        objectFit: "contain",
                    }}
                />
            )}
            {props.mode === "twitter" && (
                <img
                    src="/assets/images/twitter.svg"
                    alt="instagram"
                    width="18px"
                    height="15px"
                    style={{
                        objectFit: "contain",
                    }}
                />
            )}
            {props.mode === "vimeo" && (
                <img
                    src="/assets/images/vimeo.svg"
                    alt="instagram"
                    width="18px"
                    height="15px"
                    style={{
                        objectFit: "contain",
                    }}
                />
            )}
        </>
    );
};

export { SocialIcons };