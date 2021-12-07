import React, { Fragment } from 'react'

type IfProps = {
    condition: boolean;
    children: React.ReactNode
}

const If : React.FC<IfProps> = (props) => {
    return (
        <Fragment>
            {props.condition ? props.children : <></>}
        </Fragment>
    )
}


export default If