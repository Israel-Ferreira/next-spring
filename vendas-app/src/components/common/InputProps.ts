import { ChangeEventHandler } from "react";

export interface InputProps {
    labelText: string;
    onChangeValue: ChangeEventHandler;
    placeholder: string;
    columnSize?: string
    value?: any
}


export interface NumberInputProps extends InputProps {
    min?: number
    max?: number
}
