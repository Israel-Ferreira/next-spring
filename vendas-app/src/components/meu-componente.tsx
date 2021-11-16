import React, { Fragment, useState } from 'react'


interface MensagemProps {
    mensagem: string
}


const Mensagem = (props: MensagemProps) => (
    <Fragment>
        <h2>{props.mensagem}</h2>
    </Fragment>
)

const MeuComponente : React.FC =  () => {
    const [message, setMessage]  = useState("Hello World")

    return (
        <div className="MeuComponente">
            <Mensagem mensagem={message} />
        </div>
    )
}

export default MeuComponente