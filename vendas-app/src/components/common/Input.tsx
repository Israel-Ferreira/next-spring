import React, { ChangeEventHandler, Fragment } from 'react';

interface InputProps {
    labelText: string;
    onChangeValue: ChangeEventHandler;
    placeholder: string;
    columnSize?: string
    value?: any
}



const Input: React.FC<InputProps> = props => (
    <Fragment>
        <div className={`field column is-${props.columnSize ? props.columnSize : 'full'}`}>
            <label className="label">{props.labelText}</label>

            <div className="control">
                <input type="text" className="input" placeholder={props.placeholder} value={props.value} onChange={props.onChangeValue} />
            </div>
        </div>
    </Fragment>
)

export default Input