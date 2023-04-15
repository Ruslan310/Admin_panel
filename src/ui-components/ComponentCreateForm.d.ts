/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComponentCreateFormInputValues = {
    name?: string;
    type?: string;
    packageType?: string;
    calories?: number;
    carbons?: number;
    fats?: number;
    proteins?: number;
    recipe?: string;
    price?: number;
    picture?: string;
    weightInGram?: number;
};
export declare type ComponentCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    packageType?: ValidationFunction<string>;
    calories?: ValidationFunction<number>;
    carbons?: ValidationFunction<number>;
    fats?: ValidationFunction<number>;
    proteins?: ValidationFunction<number>;
    recipe?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    picture?: ValidationFunction<string>;
    weightInGram?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComponentCreateFormOverridesProps = {
    ComponentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    packageType?: PrimitiveOverrideProps<SelectFieldProps>;
    calories?: PrimitiveOverrideProps<TextFieldProps>;
    carbons?: PrimitiveOverrideProps<TextFieldProps>;
    fats?: PrimitiveOverrideProps<TextFieldProps>;
    proteins?: PrimitiveOverrideProps<TextFieldProps>;
    recipe?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    picture?: PrimitiveOverrideProps<TextFieldProps>;
    weightInGram?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComponentCreateFormProps = React.PropsWithChildren<{
    overrides?: ComponentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ComponentCreateFormInputValues) => ComponentCreateFormInputValues;
    onSuccess?: (fields: ComponentCreateFormInputValues) => void;
    onError?: (fields: ComponentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComponentCreateFormInputValues) => ComponentCreateFormInputValues;
    onValidate?: ComponentCreateFormValidationValues;
} & React.CSSProperties>;
export default function ComponentCreateForm(props: ComponentCreateFormProps): React.ReactElement;
