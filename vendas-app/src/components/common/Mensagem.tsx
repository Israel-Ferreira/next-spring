import React, { Fragment } from 'react'


interface MessageProps {
    msgType: string
    field?: string
    text: string
}

export interface Alert {
    msgType: string
    field?: string
    text: string
}




const Message: React.FC<MessageProps> = ({ text, msgType, field}) => {
    return (
        <Fragment>
            <article className={`message is-${msgType}`}>
                <div className="message-body">
                    {field && `${field} :`} {text}
                </div>
            </article>
        </Fragment>
    )
}


export default Message