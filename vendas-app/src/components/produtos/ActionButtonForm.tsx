import React, { Fragment } from 'react'


interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}


const ActionButtonForm: React.FC<ActionButtonProps> = props => (
    <Fragment>
        <div className="control">
            <button {...props} className="button is-link" >
                {props.label}
            </button>
        </div>
    </Fragment>
)

export default ActionButtonForm