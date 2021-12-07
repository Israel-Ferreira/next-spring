import React, { Fragment } from 'react';
import { NumberInputProps } from './InputProps';

const NumberInput: React.FC<NumberInputProps> = props => (
    <Fragment>
        <div className={`field column is-${props.columnSize ? props.columnSize : 'full'}`}>
            <label className="label">{props.labelText}</label>

            <div className="control">
                <input type="number" className="input" placeholder={props.placeholder} value={props.value} min={props.min}  onChange={props.onChangeValue} />
            </div>
        </div>
    </Fragment>
)

export default NumberInput