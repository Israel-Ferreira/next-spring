import React, { Fragment } from 'react'


type CardProps = {
    cardHeaderTitle: string
}


const Card: React.FC<CardProps> = props => (
    <Fragment>
        <div className="card">
            <div className="card-header">
                <h3 className="card-header-title">{props.cardHeaderTitle}</h3>
            </div>
            <div className="card-content">
                {props.children}
            </div>
        </div>
    </Fragment>
)

export default Card