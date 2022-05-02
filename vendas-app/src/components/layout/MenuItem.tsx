import Link from 'next/link'
import React, { Fragment } from 'react'

type MenuItemProps = {
    iconClass: string
    subtitle: string
    pathLink: string
}


const MenuItem: React.FC<MenuItemProps> = props => (
    <Fragment>
        <li>
            <Link href={props.pathLink}>
                <a>
                    <span className="icon"></span> {props.subtitle}
                </a>
            </Link>
        </li>
    </Fragment>
)

export default MenuItem