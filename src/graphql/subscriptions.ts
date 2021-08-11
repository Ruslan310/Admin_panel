/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDishComponent = /* GraphQL */ `
  subscription OnCreateDishComponent {
    onCreateDishComponent {
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
export const onUpdateDishComponent = /* GraphQL */ `
  subscription OnUpdateDishComponent {
    onUpdateDishComponent {
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
export const onDeleteDishComponent = /* GraphQL */ `
  subscription OnDeleteDishComponent {
    onDeleteDishComponent {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
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
export const onCreateComponentProduct = /* GraphQL */ `
  subscription OnCreateComponentProduct {
    onCreateComponentProduct {
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
export const onUpdateComponentProduct = /* GraphQL */ `
  subscription OnUpdateComponentProduct {
    onUpdateComponentProduct {
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
export const onDeleteComponentProduct = /* GraphQL */ `
  subscription OnDeleteComponentProduct {
    onDeleteComponentProduct {
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
export const onCreateComponent = /* GraphQL */ `
  subscription OnCreateComponent {
    onCreateComponent {
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
export const onUpdateComponent = /* GraphQL */ `
  subscription OnUpdateComponent {
    onUpdateComponent {
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
export const onDeleteComponent = /* GraphQL */ `
  subscription OnDeleteComponent {
    onDeleteComponent {
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
export const onCreateProductAtWarehouse = /* GraphQL */ `
  subscription OnCreateProductAtWarehouse {
    onCreateProductAtWarehouse {
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
export const onUpdateProductAtWarehouse = /* GraphQL */ `
  subscription OnUpdateProductAtWarehouse {
    onUpdateProductAtWarehouse {
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
export const onDeleteProductAtWarehouse = /* GraphQL */ `
  subscription OnDeleteProductAtWarehouse {
    onDeleteProductAtWarehouse {
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
export const onCreateProductFromSupplier = /* GraphQL */ `
  subscription OnCreateProductFromSupplier {
    onCreateProductFromSupplier {
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
export const onUpdateProductFromSupplier = /* GraphQL */ `
  subscription OnUpdateProductFromSupplier {
    onUpdateProductFromSupplier {
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
export const onDeleteProductFromSupplier = /* GraphQL */ `
  subscription OnDeleteProductFromSupplier {
    onDeleteProductFromSupplier {
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
export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier {
    onCreateSupplier {
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
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier {
    onUpdateSupplier {
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
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier {
    onDeleteSupplier {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse {
    onCreateWarehouse {
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
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse {
    onUpdateWarehouse {
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
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse {
    onDeleteWarehouse {
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
export const onCreateCoordinate = /* GraphQL */ `
  subscription OnCreateCoordinate {
    onCreateCoordinate {
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
export const onUpdateCoordinate = /* GraphQL */ `
  subscription OnUpdateCoordinate {
    onUpdateCoordinate {
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
export const onDeleteCoordinate = /* GraphQL */ `
  subscription OnDeleteCoordinate {
    onDeleteCoordinate {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox {
    onCreateBox {
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
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox {
    onUpdateBox {
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
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox {
    onDeleteBox {
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
export const onCreateWPOrder = /* GraphQL */ `
  subscription OnCreateWPOrder {
    onCreateWPOrder {
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
export const onUpdateWPOrder = /* GraphQL */ `
  subscription OnUpdateWPOrder {
    onUpdateWPOrder {
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
export const onDeleteWPOrder = /* GraphQL */ `
  subscription OnDeleteWPOrder {
    onDeleteWPOrder {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
