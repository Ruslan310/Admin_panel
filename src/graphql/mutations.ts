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
        company
        firstName
        lastName
        email
        phoneNumber
        WPOrders {
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
        company
        firstName
        lastName
        email
        phoneNumber
        WPOrders {
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
        company
        firstName
        lastName
        email
        phoneNumber
        WPOrders {
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
      company
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
      company
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
          company
          firstName
          lastName
          email
          phoneNumber
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
          company
          firstName
          lastName
          email
          phoneNumber
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
          company
          firstName
          lastName
          email
          phoneNumber
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
