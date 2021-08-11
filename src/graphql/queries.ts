/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDishComponent = /* GraphQL */ `
  query GetDishComponent($id: ID!) {
    getDishComponent(id: $id) {
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
export const listDishComponents = /* GraphQL */ `
  query ListDishComponents(
    $filter: ModelDishComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDishComponents = /* GraphQL */ `
  query SyncDishComponents(
    $filter: ModelDishComponentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDishComponents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
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
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
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
`;
export const syncDishes = /* GraphQL */ `
  query SyncDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
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
`;
export const getComponentProduct = /* GraphQL */ `
  query GetComponentProduct($id: ID!) {
    getComponentProduct(id: $id) {
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
export const listComponentProducts = /* GraphQL */ `
  query ListComponentProducts(
    $filter: ModelComponentProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponentProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComponentProducts = /* GraphQL */ `
  query SyncComponentProducts(
    $filter: ModelComponentProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComponentProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getComponent = /* GraphQL */ `
  query GetComponent($id: ID!) {
    getComponent(id: $id) {
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
export const listComponents = /* GraphQL */ `
  query ListComponents(
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComponents = /* GraphQL */ `
  query SyncComponents(
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComponents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProductAtWarehouse = /* GraphQL */ `
  query GetProductAtWarehouse($id: ID!) {
    getProductAtWarehouse(id: $id) {
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
export const listProductAtWarehouses = /* GraphQL */ `
  query ListProductAtWarehouses(
    $filter: ModelProductAtWarehouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductAtWarehouses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
              nextToken
              startedAt
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductAtWarehouses = /* GraphQL */ `
  query SyncProductAtWarehouses(
    $filter: ModelProductAtWarehouseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductAtWarehouses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
              nextToken
              startedAt
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductFromSupplier = /* GraphQL */ `
  query GetProductFromSupplier($id: ID!) {
    getProductFromSupplier(id: $id) {
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
export const listProductFromSuppliers = /* GraphQL */ `
  query ListProductFromSuppliers(
    $filter: ModelProductFromSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductFromSuppliers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductFromSuppliers = /* GraphQL */ `
  query SyncProductFromSuppliers(
    $filter: ModelProductFromSupplierFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductFromSuppliers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getSupplier = /* GraphQL */ `
  query GetSupplier($id: ID!) {
    getSupplier(id: $id) {
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
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSuppliers = /* GraphQL */ `
  query SyncSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSuppliers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
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
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTypes = /* GraphQL */ `
  query SyncTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDepartments = /* GraphQL */ `
  query SyncDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDepartments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWarehouse = /* GraphQL */ `
  query GetWarehouse($id: ID!) {
    getWarehouse(id: $id) {
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
export const listWarehouses = /* GraphQL */ `
  query ListWarehouses(
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWarehouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWarehouses = /* GraphQL */ `
  query SyncWarehouses(
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWarehouses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCoordinate = /* GraphQL */ `
  query GetCoordinate($id: ID!) {
    getCoordinate(id: $id) {
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
export const listCoordinates = /* GraphQL */ `
  query ListCoordinates(
    $filter: ModelCoordinateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoordinates(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCoordinates = /* GraphQL */ `
  query SyncCoordinates(
    $filter: ModelCoordinateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoordinates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            addressWPOrders {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const byPostCode = /* GraphQL */ `
  query ByPostCode(
    $postCode: String
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byPostCode(
      postCode: $postCode
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
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
export const listBoxes = /* GraphQL */ `
  query ListBoxes(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBoxes = /* GraphQL */ `
  query SyncBoxes(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoxes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getWPOrder = /* GraphQL */ `
  query GetWPOrder($id: ID!) {
    getWPOrder(id: $id) {
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
export const listWPOrders = /* GraphQL */ `
  query ListWPOrders(
    $filter: ModelWPOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWPOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const byWPOrderNumber = /* GraphQL */ `
  query ByWPOrderNumber(
    $WPOrderNumber: String
    $sortDirection: ModelSortDirection
    $filter: ModelWPOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byWPOrderNumber(
      WPOrderNumber: $WPOrderNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWPOrders = /* GraphQL */ `
  query SyncWPOrders(
    $filter: ModelWPOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWPOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const byEmail = /* GraphQL */ `
  query ByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
