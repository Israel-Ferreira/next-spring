import React, { Fragment } from "react";
import MenuItem from "./MenuItem";

type MenuProps = {
    title: string;
};

const Menu: React.FC<MenuProps> = (props) => (
    <Fragment>
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">{props.title}</p>
            <ul className="menu-list">
                <MenuItem subtitle="Home" iconClass="" pathLink="#" />
                <MenuItem subtitle="Cadastros" iconClass="" pathLink="#" />
                <MenuItem subtitle="Clientes" iconClass="" pathLink="#" />
                <MenuItem subtitle="Config" iconClass="" pathLink="#" />
            </ul>
        </aside>
    </Fragment>
);

export default Menu;
