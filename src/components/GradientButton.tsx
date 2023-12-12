import React from 'react'
interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    buttonClassName?: string;
    rest?: any;
}


const GradientButton = ({ text, className, buttonClassName, ...rest }: ButtonI) => (
    <div className={`bg-colorGradiant flex-none
                                 rounded-full ${className}`}>
        <button className={`w-[calc(100%-2px)] m-[1px] bg-black text-white px-2 py-3 rounded-full gradient-hover-effect text-sm 2xl:text-base text-center font-normal antialiased leading-[150%] ${buttonClassName}`} {...rest}>
            {text}
        </button>
    </div>
)


export {
    GradientButton
}