/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Component } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComponentUpdateFormInputValues = {
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
export declare type ComponentUpdateFormValidationValues = {
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
export declare type ComponentUpdateFormOverridesProps = {
    ComponentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ComponentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ComponentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    component?: Component;
    onSubmit?: (fields: ComponentUpdateFormInputValues) => ComponentUpdateFormInputValues;
    onSuccess?: (fields: ComponentUpdateFormInputValues) => void;
    onError?: (fields: ComponentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComponentUpdateFormInputValues) => ComponentUpdateFormInputValues;
    onValidate?: ComponentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ComponentUpdateForm(props: ComponentUpdateFormProps): React.ReactElement;
