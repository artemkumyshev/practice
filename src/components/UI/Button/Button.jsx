import React from 'react'

import './Button.scss';

const Button = ({children, theme='primary'}) => {
    return (
        <button className={`button ${theme}`}>{children}</button>
    )
}

export default Button;