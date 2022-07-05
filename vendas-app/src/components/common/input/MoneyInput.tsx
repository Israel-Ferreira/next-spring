import { Fragment } from "react";
import Input, { InputProps } from "../Input";

import {formatReal} from 'app/utils/money'


export const MoneyInput : React.FC<InputProps> = props => {
    return (
        <Fragment>
            <Input {...props} formatter={formatReal} />
        </Fragment>
    )
}
