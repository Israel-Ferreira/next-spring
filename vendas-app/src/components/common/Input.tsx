import React, { ChangeEventHandler, Fragment, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
    onChangeValue: ChangeEventHandler;
    columnSize?: string
}



const Input: React.FC<InputProps> = ({columnSize, labelText, onChangeValue, ...props}) => (
    <Fragment>
        <div className={`field column is-${columnSize ? columnSize : 'full'}`}>
            <label className="label">{labelText}</label>

            <div className="control">
                <input className="input" placeholder={props.placeholder} value={props.value} onChange={onChangeValue} {...props} />
            </div>
        </div>
    </Fragment>
)

export default Input