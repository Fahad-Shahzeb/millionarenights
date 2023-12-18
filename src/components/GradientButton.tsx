import React from 'react'
import { motion } from 'framer-motion';
interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    buttonClassName?: string;
    rest?: any;
}


const GradientButton = ({ text, className, buttonClassName, ...rest }: ButtonI) => (
    <motion.div
        whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
        }}
        className={`bg-colorGradiant flex-none
                                 rounded-full ${className}`}>
        <button className={`w-[calc(100%-1px)] m-[1px] bg-black text-white px-2 py-3 rounded-full focus:bg-gradient-to-t from-[#775CF4] to-[#C85EF7] text-sm 2xl:text-base text-center font-normal antialiased leading-[150%] ${buttonClassName}`} {...rest}>
            {text}
        </button>
    </motion.div>
)


export {
    GradientButton
}