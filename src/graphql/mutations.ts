/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAtWp
      boxes {
        items {
          id
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          wporderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      driverName
      companyName
      customerName
      customerAddress
      customerPhoneNumber
      customerEmail
      addressID
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      customerID
      customer {
        id
        wpId
        firstName
        lastName
        email
        phoneNumber
        WPOrders {
          nextToken
          startedAt
        }
        companyId
        company {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAtWp
      boxes {
        items {
          id
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          wporderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      driverName
      companyName
      customerName
      customerAddress
      customerPhoneNumber
      customerEmail
      addressID
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      customerID
      customer {
        id
        wpId
        firstName
        lastName
        email
        phoneNumber
        WPOrders {
          nextToken
          startedAt
        }
        companyId
        company {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAtWp
      boxes {
        items {
          id
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          wporderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      driverName
      companyName
      customerName
      customerAddress
      customerPhoneNumber
      customerEmail
      addressID
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      customerID
      customer {
        id
        wpId
        firstName
        lastName
        email
        phoneNumber
        WPOrders {
          nextToken
          startedAt
        }
        companyId
        company {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      WPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          finalPrice
          customerComment
          createdAtWp
          driverName
          companyName
          customerName
          customerAddress
          customerPhoneNumber
          customerEmail
          addressID
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      coordinateID
      coordinate {
        id
        latitude
        longitude
        name
        userID
        driver {
          id
          sub
          email
          role
          firstName
          lastName
          avatar
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      WPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          finalPrice
          customerComment
          createdAtWp
          driverName
          companyName
          customerName
          customerAddress
          customerPhoneNumber
          customerEmail
          addressID
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      coordinateID
      coordinate {
        id
        latitude
        longitude
        name
        userID
        driver {
          id
          sub
          email
          role
          firstName
          lastName
          avatar
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      WPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          finalPrice
          customerComment
          createdAtWp
          driverName
          companyName
          customerName
          customerAddress
          customerPhoneNumber
          customerEmail
          addressID
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      coordinateID
      coordinate {
        id
        latitude
        longitude
        name
        userID
        driver {
          id
          sub
          email
          role
          firstName
          lastName
          avatar
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        addresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      driver {
        id
        sub
        email
        role
        firstName
        lastName
        avatar
        coordinates {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      addresses {
        items {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      driver {
        id
        sub
        email
        role
        firstName
        lastName
        avatar
        coordinates {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      addresses {
        items {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      driver {
        id
        sub
        email
        role
        firstName
        lastName
        avatar
        coordinates {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      addresses {
        items {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      coordinates {
        items {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      coordinates {
        items {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      coordinates {
        items {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      name
      customers {
        items {
          id
          wpId
          firstName
          lastName
          email
          phoneNumber
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      name
      customers {
        items {
          id
          wpId
          firstName
          lastName
          email
          phoneNumber
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      name
      customers {
        items {
          id
          wpId
          firstName
          lastName
          email
          phoneNumber
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      firstName
      lastName
      email
      phoneNumber
      WPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          finalPrice
          customerComment
          createdAtWp
          driverName
          companyName
          customerName
          customerAddress
          customerPhoneNumber
          customerEmail
          addressID
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      companyId
      company {
        id
        name
        customers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      firstName
      lastName
      email
      phoneNumber
      WPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          finalPrice
          customerComment
          createdAtWp
          driverName
          companyName
          customerName
          customerAddress
          customerPhoneNumber
          customerEmail
          addressID
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      companyId
      company {
        id
        name
        customers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      firstName
      lastName
      email
      phoneNumber
      WPOrders {
        items {
          id
          WPOrderNumber
          WPOrderStatus
          finalPrice
          customerComment
          createdAtWp
          driverName
          companyName
          customerName
          customerAddress
          customerPhoneNumber
          customerEmail
          addressID
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      companyId
      company {
        id
        name
        customers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      wporderID
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
        createdAtWp
        boxes {
          nextToken
          startedAt
        }
        driverName
        companyName
        customerName
        customerAddress
        customerPhoneNumber
        customerEmail
        addressID
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        customerID
        customer {
          id
          wpId
          firstName
          lastName
          email
          phoneNumber
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      wporderID
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
        createdAtWp
        boxes {
          nextToken
          startedAt
        }
        driverName
        companyName
        customerName
        customerAddress
        customerPhoneNumber
        customerEmail
        addressID
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        customerID
        customer {
          id
          wpId
          firstName
          lastName
          email
          phoneNumber
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      wporderID
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
        createdAtWp
        boxes {
          nextToken
          startedAt
        }
        driverName
        companyName
        customerName
        customerAddress
        customerPhoneNumber
        customerEmail
        addressID
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        customerID
        customer {
          id
          wpId
          firstName
          lastName
          email
          phoneNumber
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      components {
        items {
          id
          dishId
          componentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      components {
        items {
          id
          dishId
          componentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      components {
        items {
          id
          dishId
          componentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      dishes {
        items {
          id
          dishId
          componentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      products {
        items {
          id
          componentId
          productId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      dishes {
        items {
          id
          dishId
          componentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      products {
        items {
          id
          componentId
          productId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      dishes {
        items {
          id
          dishId
          componentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      products {
        items {
          id
          componentId
          productId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      warehouse {
        id
        name
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        warehouseAddressId
      }
      qrCode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productAtWarehouseProductId
      productAtWarehouseWarehouseId
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
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      warehouse {
        id
        name
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        warehouseAddressId
      }
      qrCode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productAtWarehouseProductId
      productAtWarehouseWarehouseId
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
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      warehouse {
        id
        name
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        warehouseAddressId
      }
      qrCode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productAtWarehouseProductId
      productAtWarehouseWarehouseId
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
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      supplier {
        id
        name
        phoneNumber
        email
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supplierAddressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productFromSupplierProductId
      productFromSupplierSupplierId
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
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      supplier {
        id
        name
        phoneNumber
        email
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supplierAddressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productFromSupplierProductId
      productFromSupplierSupplierId
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
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      supplier {
        id
        name
        phoneNumber
        email
        address {
          id
          address1
          address2
          city
          postCode
          coordinateID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supplierAddressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productFromSupplierProductId
      productFromSupplierSupplierId
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
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierAddressId
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
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierAddressId
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
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierAddressId
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
      productType {
        id
        name
        category {
          id
          name
          departmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        categoryID
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      typeID
      components {
        items {
          id
          componentId
          productId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      productType {
        id
        name
        category {
          id
          name
          departmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        categoryID
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      typeID
      components {
        items {
          id
          componentId
          productId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      productType {
        id
        name
        category {
          id
          name
          departmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        categoryID
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      typeID
      components {
        items {
          id
          componentId
          productId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      category {
        id
        name
        department {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        departmentID
        types {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      categoryID
      products {
        items {
          id
          name
          measurement
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      category {
        id
        name
        department {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        departmentID
        types {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      categoryID
      products {
        items {
          id
          name
          measurement
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      category {
        id
        name
        department {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        departmentID
        types {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      categoryID
      products {
        items {
          id
          name
          measurement
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      department {
        id
        name
        categories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      departmentID
      types {
        items {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      department {
        id
        name
        categories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      departmentID
      types {
        items {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      department {
        id
        name
        categories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      departmentID
      types {
        items {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      categories {
        items {
          id
          name
          departmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      categories {
        items {
          id
          name
          departmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      categories {
        items {
          id
          name
          departmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      warehouseAddressId
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
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      warehouseAddressId
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
      address {
        id
        address1
        address2
        city
        postCode
        WPOrders {
          nextToken
          startedAt
        }
        coordinateID
        coordinate {
          id
          latitude
          longitude
          name
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      warehouseAddressId
    }
  }
`;
export const createDishComponent = /* GraphQL */ `
  mutation CreateDishComponent(
    $input: CreateDishComponentInput!
    $condition: ModelDishComponentConditionInput
  ) {
    createDishComponent(input: $input, condition: $condition) {
      id
      dishId
      componentId
      dish {
        id
        name
        description
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        dishes {
          nextToken
          startedAt
        }
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      dishId
      componentId
      dish {
        id
        name
        description
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        dishes {
          nextToken
          startedAt
        }
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      dishId
      componentId
      dish {
        id
        name
        description
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        dishes {
          nextToken
          startedAt
        }
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComponentProducts = /* GraphQL */ `
  mutation CreateComponentProducts(
    $input: CreateComponentProductsInput!
    $condition: ModelComponentProductsConditionInput
  ) {
    createComponentProducts(input: $input, condition: $condition) {
      id
      componentId
      productId
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
        dishes {
          nextToken
          startedAt
        }
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComponentProducts = /* GraphQL */ `
  mutation UpdateComponentProducts(
    $input: UpdateComponentProductsInput!
    $condition: ModelComponentProductsConditionInput
  ) {
    updateComponentProducts(input: $input, condition: $condition) {
      id
      componentId
      productId
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
        dishes {
          nextToken
          startedAt
        }
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComponentProducts = /* GraphQL */ `
  mutation DeleteComponentProducts(
    $input: DeleteComponentProductsInput!
    $condition: ModelComponentProductsConditionInput
  ) {
    deleteComponentProducts(input: $input, condition: $condition) {
      id
      componentId
      productId
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
        dishes {
          nextToken
          startedAt
        }
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        measurement
        productType {
          id
          name
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        typeID
        components {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
