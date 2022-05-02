import If from "components/common/If";
import Input from "components/common/Input";
import NumberInput from "components/common/NumberInput";
import React, { ChangeEventHandler, Fragment } from "react";

type FieldProdutoProps = {
    labelText: string;
    onChangeValue?: (value) => void;
    placeholder: string;
    isNumeric: boolean;
    columnSize?: string
    min?: number
    value?: any
}


const ProdutoField: React.FC<FieldProdutoProps> = props => {
    return (
        <Fragment>
            <If condition={props.isNumeric}>
                <Input
                    labelText={props.labelText}
                    onChange={props.onChangeValue}
                    placeholder={props.placeholder}
                    type="number"
                    value={props.value}
                    columnSize={`is-${props.columnSize ? props.columnSize : 'full'}`}
                    min={props.min ? props.min : 0}
                />
            </If>

            <If condition={!props.isNumeric}>
                <Input
                    labelText={props.labelText}
                    onChange={props.onChangeValue}
                    placeholder={props.placeholder}
                    value={props.value}
                    columnSize={`is-${props.columnSize ? props.columnSize : 'full'}`} />
            </If>
        </Fragment>

    )
}

export default ProdutoField