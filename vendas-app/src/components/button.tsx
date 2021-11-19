import React, { ChangeEvent, EventHandler, Fragment, MouseEventHandler, SyntheticEvent } from 'react'

type ButtonProps = {
    color: string,
    clickEvent: MouseEventHandler<HTMLButtonElement>
}


const Button: React.FC<ButtonProps> = (props) => (
    <Fragment>
        <button className={`button is-${props.color ? props.color : "primary"}`} onClick={props.clickEvent}>
            Click Here
        </button>
    </Fragment>
)

export default Button