import { formatReal } from 'app/utils/money';
import React, { ChangeEventHandler, Fragment, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
    columnSize?: string
    onChange?: (value) => void;
    currency? : boolean
}



const Input: React.FC<InputProps> = ({columnSize, labelText, currency,  ...props}) => {

    const onInputChange = (event) => {
        let value = event.target.value

        if(value && currency) {
            value = formatReal(value)
        }

        if(props.onChange){
            props.onChange(value)
        }
    }

    return (
        <Fragment>
            <div className={`field column is-${columnSize ? columnSize : 'full'}`}>
                <label className="label">{labelText}</label>
    
                <div className="control">
                    <input className="input" placeholder={props.placeholder} value={props.value}  {...props} onChange={onInputChange}  />
                </div>
            </div>
        </Fragment>
    )
}

export default Input