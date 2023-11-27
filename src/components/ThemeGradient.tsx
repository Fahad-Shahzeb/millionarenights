import React from 'react'
import { Gradient_1 } from '../assets'

interface Props {
    containerClass: string
    imageClass: string
    version: '1' | '2' | '3'
}
const ThemeGradient = (props: Props) => {
    return (
        <div className=''>
            <div className={'absolute top-0 z-[-1]'}>
                <img
                    src={
                        props.version === '1' ?
                            Gradient_1
                            : props.version === '2' ?
                                Gradient_1
                                : props.version === '3' ?
                                    Gradient_1
                                    : Gradient_1
                    }
                    className={props.imageClass}
                />
            </div>
        </div>
    )
}

export { ThemeGradient }