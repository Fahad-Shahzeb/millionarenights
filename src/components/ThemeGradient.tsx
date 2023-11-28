import React from 'react'
import { Gradient_1, Gradient_2, Gradient_3, Gradient_4, Gradient_5 } from '../assets'

interface Props {
    containerClass: string
    imageClass: string
    version: '1' | '2' | '3' | '4' | '5'
}
const ThemeGradient = (props: Props) => {
    return (
        <div className=''>
            <div className={`absolute top-0 z-[-1] ${props.containerClass}`}>
                <img
                    src={
                        props.version === '1' ?
                            Gradient_1
                            : props.version === '2' ?
                                Gradient_2
                                : props.version === '3' ?
                                    Gradient_3 :
                                    props.version === '4' ?
                                        Gradient_4
                                        : Gradient_5
                    }
                    className={`${props.imageClass}`}
                />
            </div>
        </div>
    )
}

export { ThemeGradient }