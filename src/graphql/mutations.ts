/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDishComponent = /* GraphQL */ `
  mutation CreateDishComponent(
    $input: CreateDishComponentInput!
    $condition: ModelDishComponentConditionInput
  ) {
    createDishComponent(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      dish {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      component {
        id
        name
        type
        packageType
        calories
        carbons
        fats
        proteins
        recipe
        price
        picture
        weightInGram
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateDishComponent = /* GraphQL */ `
  mutation UpdateDishComponent(
    $input: UpdateDishComponentInput!
    $condition: ModelDishComponentConditionInput
  ) {
    updateDishComponent(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      dish {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      component {
        id
        name
        type
        packageType
        calories
        carbons
        fats
        proteins
        recipe
        price
        picture
        weightInGram
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteDishComponent = /* GraphQL */ `
  mutation DeleteDishComponent(
    $input: DeleteDishComponentInput!
    $condition: ModelDishComponentConditionInput
  ) {
    deleteDishComponent(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      dish {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      component {
        id
        name
        type
        packageType
        calories
        carbons
        fats
        proteins
        recipe
        price
        picture
        weightInGram
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createComponentProduct = /* GraphQL */ `
  mutation CreateComponentProduct(
    $input: CreateComponentProductInput!
    $condition: ModelComponentProductConditionInput
  ) {
    createComponentProduct(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      component {
        id
        name
        type
        packageType
        calories
        carbons
        fats
        proteins
        recipe
        price
        picture
        weightInGram
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`;
export const updateComponentProduct = /* GraphQL */ `
  mutation UpdateComponentProduct(
    $input: UpdateComponentProductInput!
    $condition: ModelComponentProductConditionInput
  ) {
    updateComponentProduct(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      component {
        id
        name
        type
        packageType
        calories
        carbons
        fats
        proteins
        recipe
        price
        picture
        weightInGram
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`;
export const deleteComponentProduct = /* GraphQL */ `
  mutation DeleteComponentProduct(
    $input: DeleteComponentProductInput!
    $condition: ModelComponentProductConditionInput
  ) {
    deleteComponentProduct(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      component {
        id
        name
        type
        packageType
        calories
        carbons
        fats
        proteins
        recipe
        price
        picture
        weightInGram
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`;
export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $input: CreateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    createComponent(input: $input, condition: $condition) {
      id
      name
      type
      packageType
      calories
      carbons
      fats
      proteins
      recipe
      price
      picture
      weightInGram
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $input: UpdateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    updateComponent(input: $input, condition: $condition) {
      id
      name
      type
      packageType
      calories
      carbons
      fats
      proteins
      recipe
      price
      picture
      weightInGram
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $input: DeleteComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    deleteComponent(input: $input, condition: $condition) {
      id
      name
      type
      packageType
      calories
      carbons
      fats
      proteins
      recipe
      price
      picture
      weightInGram
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProductAtWarehouse = /* GraphQL */ `
  mutation CreateProductAtWarehouse(
    $input: CreateProductAtWarehouseInput!
    $condition: ModelProductAtWarehouseConditionInput
  ) {
    createProductAtWarehouse(input: $input, condition: $condition) {
      id
      quantity
      maxQuantity
      minQuantity
      qrCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
      warehouse {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const updateProductAtWarehouse = /* GraphQL */ `
  mutation UpdateProductAtWarehouse(
    $input: UpdateProductAtWarehouseInput!
    $condition: ModelProductAtWarehouseConditionInput
  ) {
    updateProductAtWarehouse(input: $input, condition: $condition) {
      id
      quantity
      maxQuantity
      minQuantity
      qrCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
      warehouse {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const deleteProductAtWarehouse = /* GraphQL */ `
  mutation DeleteProductAtWarehouse(
    $input: DeleteProductAtWarehouseInput!
    $condition: ModelProductAtWarehouseConditionInput
  ) {
    deleteProductAtWarehouse(input: $input, condition: $condition) {
      id
      quantity
      maxQuantity
      minQuantity
      qrCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
      warehouse {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const createProductFromSupplier = /* GraphQL */ `
  mutation CreateProductFromSupplier(
    $input: CreateProductFromSupplierInput!
    $condition: ModelProductFromSupplierConditionInput
  ) {
    createProductFromSupplier(input: $input, condition: $condition) {
      id
      price
      quality
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      supplier {
        id
        name
        phoneNumber
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`;
export const updateProductFromSupplier = /* GraphQL */ `
  mutation UpdateProductFromSupplier(
    $input: UpdateProductFromSupplierInput!
    $condition: ModelProductFromSupplierConditionInput
  ) {
    updateProductFromSupplier(input: $input, condition: $condition) {
      id
      price
      quality
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      supplier {
        id
        name
        phoneNumber
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`;
export const deleteProductFromSupplier = /* GraphQL */ `
  mutation DeleteProductFromSupplier(
    $input: DeleteProductFromSupplierInput!
    $condition: ModelProductFromSupplierConditionInput
  ) {
    deleteProductFromSupplier(input: $input, condition: $condition) {
      id
      price
      quality
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      supplier {
        id
        name
        phoneNumber
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
      product {
        id
        name
        measurement
        typeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        type {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`;
export const createSupplier = /* GraphQL */ `
  mutation CreateSupplier(
    $input: CreateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    createSupplier(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateSupplier = /* GraphQL */ `
  mutation UpdateSupplier(
    $input: UpdateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    updateSupplier(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteSupplier = /* GraphQL */ `
  mutation DeleteSupplier(
    $input: DeleteSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    deleteSupplier(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      measurement
      typeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      type {
        id
        name
        categoryID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          items {
            id
            name
            measurement
            typeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            type {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        category {
          id
          name
          departmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          types {
            items {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          department {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            categories {
              nextToken
              startedAt
            }
          }
        }
      }
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      measurement
      typeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      type {
        id
        name
        categoryID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          items {
            id
            name
            measurement
            typeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            type {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        category {
          id
          name
          departmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          types {
            items {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          department {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            categories {
              nextToken
              startedAt
            }
          }
        }
      }
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      measurement
      typeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      type {
        id
        name
        categoryID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          items {
            id
            name
            measurement
            typeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            type {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        category {
          id
          name
          departmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          types {
            items {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          department {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            categories {
              nextToken
              startedAt
            }
          }
        }
      }
    }
  }
`;
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          name
          measurement
          typeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          type {
            id
            name
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            products {
              nextToken
              startedAt
            }
            category {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        departmentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        types {
          items {
            id
            name
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            products {
              nextToken
              startedAt
            }
            category {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        department {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          categories {
            items {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
      id
      name
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          name
          measurement
          typeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          type {
            id
            name
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            products {
              nextToken
              startedAt
            }
            category {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        departmentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        types {
          items {
            id
            name
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            products {
              nextToken
              startedAt
            }
            category {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        department {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          categories {
            items {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
      id
      name
      categoryID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          name
          measurement
          typeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          type {
            id
            name
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            products {
              nextToken
              startedAt
            }
            category {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        departmentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        types {
          items {
            id
            name
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            products {
              nextToken
              startedAt
            }
            category {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        department {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          categories {
            items {
              id
              name
              departmentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      departmentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      types {
        items {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      department {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        categories {
          items {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      departmentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      types {
        items {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      department {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        categories {
          items {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      departmentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      types {
        items {
          id
          name
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          products {
            items {
              id
              name
              measurement
              typeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          category {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      department {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        categories {
          items {
            id
            name
            departmentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            types {
              nextToken
              startedAt
            }
            department {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      categories {
        items {
          id
          name
          departmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          types {
            items {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          department {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            categories {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      categories {
        items {
          id
          name
          departmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          types {
            items {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          department {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            categories {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      categories {
        items {
          id
          name
          departmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          types {
            items {
              id
              name
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          department {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            categories {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createCoordinate = /* GraphQL */ `
  mutation CreateCoordinate(
    $input: CreateCoordinateInput!
    $condition: ModelCoordinateConditionInput
  ) {
    createCoordinate(input: $input, condition: $condition) {
      id
      latitude
      longitude
      name
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      coordinateAddresses {
        items {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCoordinate = /* GraphQL */ `
  mutation UpdateCoordinate(
    $input: UpdateCoordinateInput!
    $condition: ModelCoordinateConditionInput
  ) {
    updateCoordinate(input: $input, condition: $condition) {
      id
      latitude
      longitude
      name
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      coordinateAddresses {
        items {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCoordinate = /* GraphQL */ `
  mutation DeleteCoordinate(
    $input: DeleteCoordinateInput!
    $condition: ModelCoordinateConditionInput
  ) {
    deleteCoordinate(input: $input, condition: $condition) {
      id
      latitude
      longitude
      name
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      coordinateAddresses {
        items {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      address1
      address2
      city
      postCode
      coordinateID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      addressWPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          WPDishes {
            name
            dishType
            quantity
            weekDay
          }
          finalPrice
          customerComment
          customerID
          addressID
          createdAtWp
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          address {
            id
            address1
            address2
            city
            postCode
            coordinateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          WPOrderBoxes {
            items {
              id
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              WPOrderID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          customer {
            id
            wpId
            company
            firstName
            lastName
            email
            phoneNumber
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            customerWPOrders {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      address1
      address2
      city
      postCode
      coordinateID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      addressWPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          WPDishes {
            name
            dishType
            quantity
            weekDay
          }
          finalPrice
          customerComment
          customerID
          addressID
          createdAtWp
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          address {
            id
            address1
            address2
            city
            postCode
            coordinateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          WPOrderBoxes {
            items {
              id
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              WPOrderID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          customer {
            id
            wpId
            company
            firstName
            lastName
            email
            phoneNumber
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            customerWPOrders {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      address1
      address2
      city
      postCode
      coordinateID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      addressWPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          WPDishes {
            name
            dishType
            quantity
            weekDay
          }
          finalPrice
          customerComment
          customerID
          addressID
          createdAtWp
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          address {
            id
            address1
            address2
            city
            postCode
            coordinateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          WPOrderBoxes {
            items {
              id
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              WPOrderID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          customer {
            id
            wpId
            company
            firstName
            lastName
            email
            phoneNumber
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            customerWPOrders {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createBox = /* GraphQL */ `
  mutation CreateBox(
    $input: CreateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    createBox(input: $input, condition: $condition) {
      id
      sticker
      boxStatus
      qrCode
      customerComment
      weekDay
      WPOrderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      WPOrder {
        id
        WPOrderNumber
        WPOrderStatus
        WPDishes {
          name
          dishType
          quantity
          weekDay
        }
        finalPrice
        customerComment
        customerID
        addressID
        createdAtWp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        WPOrderBoxes {
          items {
            id
            sticker
            boxStatus
            qrCode
            customerComment
            weekDay
            WPOrderID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            WPOrder {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        customer {
          id
          wpId
          company
          firstName
          lastName
          email
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          customerWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const updateBox = /* GraphQL */ `
  mutation UpdateBox(
    $input: UpdateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    updateBox(input: $input, condition: $condition) {
      id
      sticker
      boxStatus
      qrCode
      customerComment
      weekDay
      WPOrderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      WPOrder {
        id
        WPOrderNumber
        WPOrderStatus
        WPDishes {
          name
          dishType
          quantity
          weekDay
        }
        finalPrice
        customerComment
        customerID
        addressID
        createdAtWp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        WPOrderBoxes {
          items {
            id
            sticker
            boxStatus
            qrCode
            customerComment
            weekDay
            WPOrderID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            WPOrder {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        customer {
          id
          wpId
          company
          firstName
          lastName
          email
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          customerWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const deleteBox = /* GraphQL */ `
  mutation DeleteBox(
    $input: DeleteBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    deleteBox(input: $input, condition: $condition) {
      id
      sticker
      boxStatus
      qrCode
      customerComment
      weekDay
      WPOrderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      WPOrder {
        id
        WPOrderNumber
        WPOrderStatus
        WPDishes {
          name
          dishType
          quantity
          weekDay
        }
        finalPrice
        customerComment
        customerID
        addressID
        createdAtWp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        WPOrderBoxes {
          items {
            id
            sticker
            boxStatus
            qrCode
            customerComment
            weekDay
            WPOrderID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            WPOrder {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        customer {
          id
          wpId
          company
          firstName
          lastName
          email
          phoneNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          customerWPOrders {
            items {
              id
              WPOrderNumber
              WPOrderStatus
              finalPrice
              customerComment
              customerID
              addressID
              createdAtWp
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
    }
  }
`;
export const createWPOrder = /* GraphQL */ `
  mutation CreateWPOrder(
    $input: CreateWPOrderInput!
    $condition: ModelWPOrderConditionInput
  ) {
    createWPOrder(input: $input, condition: $condition) {
      id
      WPOrderNumber
      WPOrderStatus
      WPDishes {
        name
        dishType
        quantity
        weekDay
      }
      finalPrice
      customerComment
      customerID
      addressID
      createdAtWp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      WPOrderBoxes {
        items {
          id
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          WPOrderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WPOrder {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      customer {
        id
        wpId
        company
        firstName
        lastName
        email
        phoneNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        customerWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateWPOrder = /* GraphQL */ `
  mutation UpdateWPOrder(
    $input: UpdateWPOrderInput!
    $condition: ModelWPOrderConditionInput
  ) {
    updateWPOrder(input: $input, condition: $condition) {
      id
      WPOrderNumber
      WPOrderStatus
      WPDishes {
        name
        dishType
        quantity
        weekDay
      }
      finalPrice
      customerComment
      customerID
      addressID
      createdAtWp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      WPOrderBoxes {
        items {
          id
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          WPOrderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WPOrder {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      customer {
        id
        wpId
        company
        firstName
        lastName
        email
        phoneNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        customerWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteWPOrder = /* GraphQL */ `
  mutation DeleteWPOrder(
    $input: DeleteWPOrderInput!
    $condition: ModelWPOrderConditionInput
  ) {
    deleteWPOrder(input: $input, condition: $condition) {
      id
      WPOrderNumber
      WPOrderStatus
      WPDishes {
        name
        dishType
        quantity
        weekDay
      }
      finalPrice
      customerComment
      customerID
      addressID
      createdAtWp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        address1
        address2
        city
        postCode
        coordinateID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      WPOrderBoxes {
        items {
          id
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          WPOrderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WPOrder {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
        }
        nextToken
        startedAt
      }
      customer {
        id
        wpId
        company
        firstName
        lastName
        email
        phoneNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        customerWPOrders {
          items {
            id
            WPOrderNumber
            WPOrderStatus
            WPDishes {
              name
              dishType
              quantity
              weekDay
            }
            finalPrice
            customerComment
            customerID
            addressID
            createdAtWp
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            address {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            WPOrderBoxes {
              nextToken
              startedAt
            }
            customer {
              id
              wpId
              company
              firstName
              lastName
              email
              phoneNumber
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      sub
      email
      role
      firstName
      lastName
      avatar
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      assignedDriverCoordinates {
        items {
          id
          latitude
          longitude
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          coordinateAddresses {
            items {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      sub
      email
      role
      firstName
      lastName
      avatar
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      assignedDriverCoordinates {
        items {
          id
          latitude
          longitude
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          coordinateAddresses {
            items {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      sub
      email
      role
      firstName
      lastName
      avatar
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      assignedDriverCoordinates {
        items {
          id
          latitude
          longitude
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          coordinateAddresses {
            items {
              id
              address1
              address2
              city
              postCode
              coordinateID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      wpId
      company
      firstName
      lastName
      email
      phoneNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      customerWPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          WPDishes {
            name
            dishType
            quantity
            weekDay
          }
          finalPrice
          customerComment
          customerID
          addressID
          createdAtWp
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          address {
            id
            address1
            address2
            city
            postCode
            coordinateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          WPOrderBoxes {
            items {
              id
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              WPOrderID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          customer {
            id
            wpId
            company
            firstName
            lastName
            email
            phoneNumber
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            customerWPOrders {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      wpId
      company
      firstName
      lastName
      email
      phoneNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      customerWPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          WPDishes {
            name
            dishType
            quantity
            weekDay
          }
          finalPrice
          customerComment
          customerID
          addressID
          createdAtWp
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          address {
            id
            address1
            address2
            city
            postCode
            coordinateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          WPOrderBoxes {
            items {
              id
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              WPOrderID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          customer {
            id
            wpId
            company
            firstName
            lastName
            email
            phoneNumber
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            customerWPOrders {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      wpId
      company
      firstName
      lastName
      email
      phoneNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      customerWPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          WPDishes {
            name
            dishType
            quantity
            weekDay
          }
          finalPrice
          customerComment
          customerID
          addressID
          createdAtWp
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          address {
            id
            address1
            address2
            city
            postCode
            coordinateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          WPOrderBoxes {
            items {
              id
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              WPOrderID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          customer {
            id
            wpId
            company
            firstName
            lastName
            email
            phoneNumber
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            customerWPOrders {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
