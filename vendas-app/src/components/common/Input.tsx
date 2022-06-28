import { formatReal } from 'app/utils/money';
import React, { ChangeEventHandler, Fragment, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
    columnSize?: string
    onChange?: (value) => void;
    currency? : boolean
    error?: string
}



const Input: React.FC<InputProps> = ({columnSize, labelText, currency,error,   ...props}) => {

    const onInputChange = (event) => {
        let value = event.target.value

        if(value && currency) {
            value = formatReal(value)
        }
    }

    return (
        <Fragment>
            <div className={`field column is-${columnSize ? columnSize : 'full'}`}>
                <label className="label">{props.required ? `${labelText} *` : `${labelText}` }</label>
    
                <div className="control">
                    <input className="input" placeholder={props.placeholder} value={props.value}  {...props}  />
                    {error && 
                        <p className="help is-danger">{error}</p>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Input