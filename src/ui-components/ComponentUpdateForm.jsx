/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Component } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ComponentUpdateForm(props) {
  const {
    id: idProp,
    component: componentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    type: "",
    packageType: "",
    calories: "",
    carbons: "",
    fats: "",
    proteins: "",
    recipe: "",
    price: "",
    picture: "",
    weightInGram: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [packageType, setPackageType] = React.useState(
    initialValues.packageType
  );
  const [calories, setCalories] = React.useState(initialValues.calories);
  const [carbons, setCarbons] = React.useState(initialValues.carbons);
  const [fats, setFats] = React.useState(initialValues.fats);
  const [proteins, setProteins] = React.useState(initialValues.proteins);
  const [recipe, setRecipe] = React.useState(initialValues.recipe);
  const [price, setPrice] = React.useState(initialValues.price);
  const [picture, setPicture] = React.useState(initialValues.picture);
  const [weightInGram, setWeightInGram] = React.useState(
    initialValues.weightInGram
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = componentRecord
      ? { ...initialValues, ...componentRecord }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setPackageType(cleanValues.packageType);
    setCalories(cleanValues.calories);
    setCarbons(cleanValues.carbons);
    setFats(cleanValues.fats);
    setProteins(cleanValues.proteins);
    setRecipe(cleanValues.recipe);
    setPrice(cleanValues.price);
    setPicture(cleanValues.picture);
    setWeightInGram(cleanValues.weightInGram);
    setErrors({});
  };
  const [componentRecord, setComponentRecord] =
    React.useState(componentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Component, idProp)
        : componentModelProp;
      setComponentRecord(record);
    };
    queryData();
  }, [idProp, componentModelProp]);
  React.useEffect(resetStateValues, [componentRecord]);
  const validations = {
    name: [{ type: "Required" }],
    type: [{ type: "Required" }],
    packageType: [{ type: "Required" }],
    calories: [{ type: "Required" }],
    carbons: [{ type: "Required" }],
    fats: [{ type: "Required" }],
    proteins: [{ type: "Required" }],
    recipe: [{ type: "Required" }],
    price: [{ type: "Required" }],
    picture: [{ type: "Required" }],
    weightInGram: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          type,
          packageType,
          calories,
          carbons,
          fats,
          proteins,
          recipe,
          price,
          picture,
          weightInGram,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Component.copyOf(componentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ComponentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              type,
              packageType,
              calories,
              carbons,
              fats,
              proteins,
              recipe,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type: value,
              packageType,
              calories,
              carbons,
              fats,
              proteins,
              recipe,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Main"
          value="MAIN"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Side"
          value="SIDE"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Soup"
          value="SOUP"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Salad"
          value="SALAD"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Dessert"
          value="DESSERT"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Package type"
        placeholder="Please select an option"
        isDisabled={false}
        value={packageType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType: value,
              calories,
              carbons,
              fats,
              proteins,
              recipe,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.packageType ?? value;
          }
          if (errors.packageType?.hasError) {
            runValidationTasks("packageType", value);
          }
          setPackageType(value);
        }}
        onBlur={() => runValidationTasks("packageType", packageType)}
        errorMessage={errors.packageType?.errorMessage}
        hasError={errors.packageType?.hasError}
        {...getOverrideProps(overrides, "packageType")}
      >
        <option
          children="Hot"
          value="HOT"
          {...getOverrideProps(overrides, "packageTypeoption0")}
        ></option>
        <option
          children="Cold"
          value="COLD"
          {...getOverrideProps(overrides, "packageTypeoption1")}
        ></option>
        <option
          children="Dessert"
          value="DESSERT"
          {...getOverrideProps(overrides, "packageTypeoption2")}
        ></option>
        <option
          children="Soup"
          value="SOUP"
          {...getOverrideProps(overrides, "packageTypeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Calories"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={calories}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories: value,
              carbons,
              fats,
              proteins,
              recipe,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.calories ?? value;
          }
          if (errors.calories?.hasError) {
            runValidationTasks("calories", value);
          }
          setCalories(value);
        }}
        onBlur={() => runValidationTasks("calories", calories)}
        errorMessage={errors.calories?.errorMessage}
        hasError={errors.calories?.hasError}
        {...getOverrideProps(overrides, "calories")}
      ></TextField>
      <TextField
        label="Carbons"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={carbons}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories,
              carbons: value,
              fats,
              proteins,
              recipe,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.carbons ?? value;
          }
          if (errors.carbons?.hasError) {
            runValidationTasks("carbons", value);
          }
          setCarbons(value);
        }}
        onBlur={() => runValidationTasks("carbons", carbons)}
        errorMessage={errors.carbons?.errorMessage}
        hasError={errors.carbons?.hasError}
        {...getOverrideProps(overrides, "carbons")}
      ></TextField>
      <TextField
        label="Fats"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={fats}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories,
              carbons,
              fats: value,
              proteins,
              recipe,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.fats ?? value;
          }
          if (errors.fats?.hasError) {
            runValidationTasks("fats", value);
          }
          setFats(value);
        }}
        onBlur={() => runValidationTasks("fats", fats)}
        errorMessage={errors.fats?.errorMessage}
        hasError={errors.fats?.hasError}
        {...getOverrideProps(overrides, "fats")}
      ></TextField>
      <TextField
        label="Proteins"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={proteins}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories,
              carbons,
              fats,
              proteins: value,
              recipe,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.proteins ?? value;
          }
          if (errors.proteins?.hasError) {
            runValidationTasks("proteins", value);
          }
          setProteins(value);
        }}
        onBlur={() => runValidationTasks("proteins", proteins)}
        errorMessage={errors.proteins?.errorMessage}
        hasError={errors.proteins?.hasError}
        {...getOverrideProps(overrides, "proteins")}
      ></TextField>
      <TextField
        label="Recipe"
        isRequired={true}
        isReadOnly={false}
        value={recipe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories,
              carbons,
              fats,
              proteins,
              recipe: value,
              price,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.recipe ?? value;
          }
          if (errors.recipe?.hasError) {
            runValidationTasks("recipe", value);
          }
          setRecipe(value);
        }}
        onBlur={() => runValidationTasks("recipe", recipe)}
        errorMessage={errors.recipe?.errorMessage}
        hasError={errors.recipe?.hasError}
        {...getOverrideProps(overrides, "recipe")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories,
              carbons,
              fats,
              proteins,
              recipe,
              price: value,
              picture,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Picture"
        isRequired={true}
        isReadOnly={false}
        value={picture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories,
              carbons,
              fats,
              proteins,
              recipe,
              price,
              picture: value,
              weightInGram,
            };
            const result = onChange(modelFields);
            value = result?.picture ?? value;
          }
          if (errors.picture?.hasError) {
            runValidationTasks("picture", value);
          }
          setPicture(value);
        }}
        onBlur={() => runValidationTasks("picture", picture)}
        errorMessage={errors.picture?.errorMessage}
        hasError={errors.picture?.hasError}
        {...getOverrideProps(overrides, "picture")}
      ></TextField>
      <TextField
        label="Weight in gram"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={weightInGram}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              packageType,
              calories,
              carbons,
              fats,
              proteins,
              recipe,
              price,
              picture,
              weightInGram: value,
            };
            const result = onChange(modelFields);
            value = result?.weightInGram ?? value;
          }
          if (errors.weightInGram?.hasError) {
            runValidationTasks("weightInGram", value);
          }
          setWeightInGram(value);
        }}
        onBlur={() => runValidationTasks("weightInGram", weightInGram)}
        errorMessage={errors.weightInGram?.errorMessage}
        hasError={errors.weightInGram?.hasError}
        {...getOverrideProps(overrides, "weightInGram")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || componentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || componentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
