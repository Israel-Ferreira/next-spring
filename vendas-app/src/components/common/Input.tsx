import { formatReal } from 'app/utils/money';
import React, { ChangeEventHandler, Fragment, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
    columnSize?: string
    error?: string
    formatter?: (value: string) => string;
}



const Input: React.FC<InputProps> = ({columnSize, labelText,error, formatter, onChange,   ...props}) => {

    const onInputChange =  (event) => {
        const value = event.target.value
        const name = event.target.name;

        const formattedValue = (formatter && formatter(value as string)) || value;

        onChange({
            ...event,
            target: {
                name,
                value: formattedValue,
            }
        })
    }


    return (
        <Fragment>
            <div className={`field column is-${columnSize ? columnSize : 'full'}`}>
                <label className="label">{props.required ? `${labelText} *` : `${labelText}` }</label>
    
                <div className="control">
                    <input className="input" placeholder={props.placeholder} onChange={onInputChange} value={props.value}  {...props}  />
                    {error && 
                        <p className="help is-danger">{error}</p>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Input