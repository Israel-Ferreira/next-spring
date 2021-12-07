import If from "components/utils/If";
import React, { ChangeEventHandler } from "react";

type FieldProdutoProps = {
    labelText: string;
    onChangeValue: ChangeEventHandler;
    placeholder: string;
    isNumeric: boolean;
    columnSize?: string
    min?: number
    max?: number
}


const ProdutoField: React.FC<FieldProdutoProps> = props => {
    return (
        <div className={`field column is-${props.columnSize ? props.columnSize : 'full'}`}>
            <label className="label">{props.labelText}</label>
            {props.isNumeric}



            <div className="control">
                <If condition={props.isNumeric}>
                    <input type="number" min={props.min ? props.min : 0} className="input" placeholder={props.placeholder} onChange={props.onChangeValue} />
                </If>

                <If condition={!props.isNumeric}>
                    <input type="text" className="input" placeholder={props.placeholder} onChange={props.onChangeValue} />
                </If>


            </div>
        </div>
    )
}

export default ProdutoField