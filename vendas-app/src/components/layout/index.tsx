import React, { Fragment } from "react"
import Card from "./card"


const Layout : React.FC = props => (
    <div className="app">
        <section className="main columns is-fullheight">
            {/* Menu */}

            <div className="container column is-10">
                <div className="section">
                    <Card cardHeaderTitle="Teste">
                        <h4>Teste</h4>
                    </Card>
                    <Card cardHeaderTitle="Teste 2">
                        <h1>Teste</h1>
                    </Card>
                </div>
            </div>
        </section>
    </div>
)

export { Layout }