import React, { Fragment } from 'react'

type MenuItemProps = {
    iconClass: string
    subtitle: string
    pathLink: string
}


const MenuItem: React.FC<MenuItemProps> = props => (
    <Fragment>
        <li>
            <a href="#">
                <span className="icon"></span>{props.subtitle}
            </a>
        </li>
    </Fragment>
)

export default MenuItem