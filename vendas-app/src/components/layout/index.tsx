import Message, { Alert } from "components/common/Mensagem"
import React, { Fragment, ReactNode } from "react"
import Card from "./card"

import Menu from './Menu'


type LayoutProps = {
    title?: string
    children?: ReactNode
    messages?: Array<Alert>
}
 

const Layout: React.FC<LayoutProps> = props => (
    <div className="app">
        <section className="main columns is-fullheight">
            {/* Menu */}
            <Menu title="Minhas Vendas" />

            <div className="container column is-10">
                <div className="section">
                    <Card cardHeaderTitle={props.title ? props.title : "Vendas"}>
                        {props.messages && props.messages.map(msg => (
                            <>
                                <Message key={msg.text} {...msg} />
                            </>
                        ))}
                        {props.children}
                    </Card>
                </div>
            </div>
        </section>
    </div>
)

export { Layout }