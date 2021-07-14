/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      coordinates {
        items {
          id
          latitude
          longitude
          assignedDriverUserId
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          assignedDriverUser {
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
            coordinates {
              nextToken
              startedAt
            }
          }
          addresses {
            items {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      coordinates {
        items {
          id
          latitude
          longitude
          assignedDriverUserId
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          assignedDriverUser {
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
            coordinates {
              nextToken
              startedAt
            }
          }
          addresses {
            items {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      coordinates {
        items {
          id
          latitude
          longitude
          assignedDriverUserId
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          assignedDriverUser {
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
            coordinates {
              nextToken
              startedAt
            }
          }
          addresses {
            items {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      orders {
        items {
          id
          orderNumber
          orderStatus
          customerId
          dishes {
            name
            dishType
            quantity
            weekDay
          }
          addressId
          finalPrice
          customerComment
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
            orders {
              nextToken
              startedAt
            }
          }
          boxes {
            items {
              id
              orderId
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          address {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
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
      orders {
        items {
          id
          orderNumber
          orderStatus
          customerId
          dishes {
            name
            dishType
            quantity
            weekDay
          }
          addressId
          finalPrice
          customerComment
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
            orders {
              nextToken
              startedAt
            }
          }
          boxes {
            items {
              id
              orderId
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          address {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
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
      orders {
        items {
          id
          orderNumber
          orderStatus
          customerId
          dishes {
            name
            dishType
            quantity
            weekDay
          }
          addressId
          finalPrice
          customerComment
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
            orders {
              nextToken
              startedAt
            }
          }
          boxes {
            items {
              id
              orderId
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          address {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
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
      orderId
      sticker
      boxStatus
      qrCode
      customerComment
      weekDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      order {
        id
        orderNumber
        orderStatus
        customerId
        dishes {
          name
          dishType
          quantity
          weekDay
        }
        addressId
        finalPrice
        customerComment
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
        boxes {
          items {
            id
            orderId
            sticker
            boxStatus
            qrCode
            customerComment
            weekDay
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            order {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
        address {
          id
          address1
          address2
          city
          postCode
          addressCoordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressCoordinates {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
      orderId
      sticker
      boxStatus
      qrCode
      customerComment
      weekDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      order {
        id
        orderNumber
        orderStatus
        customerId
        dishes {
          name
          dishType
          quantity
          weekDay
        }
        addressId
        finalPrice
        customerComment
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
        boxes {
          items {
            id
            orderId
            sticker
            boxStatus
            qrCode
            customerComment
            weekDay
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            order {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
        address {
          id
          address1
          address2
          city
          postCode
          addressCoordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressCoordinates {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
      orderId
      sticker
      boxStatus
      qrCode
      customerComment
      weekDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      order {
        id
        orderNumber
        orderStatus
        customerId
        dishes {
          name
          dishType
          quantity
          weekDay
        }
        addressId
        finalPrice
        customerComment
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
        boxes {
          items {
            id
            orderId
            sticker
            boxStatus
            qrCode
            customerComment
            weekDay
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            order {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
        address {
          id
          address1
          address2
          city
          postCode
          addressCoordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressCoordinates {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
      addressCoordinatesId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      addressCoordinates {
        id
        latitude
        longitude
        assignedDriverUserId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        assignedDriverUser {
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
          coordinates {
            items {
              id
              latitude
              longitude
              assignedDriverUserId
              name
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
        addresses {
          items {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      orders {
        items {
          id
          orderNumber
          orderStatus
          customerId
          dishes {
            name
            dishType
            quantity
            weekDay
          }
          addressId
          finalPrice
          customerComment
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
            orders {
              nextToken
              startedAt
            }
          }
          boxes {
            items {
              id
              orderId
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          address {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
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
      addressCoordinatesId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      addressCoordinates {
        id
        latitude
        longitude
        assignedDriverUserId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        assignedDriverUser {
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
          coordinates {
            items {
              id
              latitude
              longitude
              assignedDriverUserId
              name
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
        addresses {
          items {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      orders {
        items {
          id
          orderNumber
          orderStatus
          customerId
          dishes {
            name
            dishType
            quantity
            weekDay
          }
          addressId
          finalPrice
          customerComment
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
            orders {
              nextToken
              startedAt
            }
          }
          boxes {
            items {
              id
              orderId
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          address {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
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
      addressCoordinatesId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      addressCoordinates {
        id
        latitude
        longitude
        assignedDriverUserId
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        assignedDriverUser {
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
          coordinates {
            items {
              id
              latitude
              longitude
              assignedDriverUserId
              name
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
        addresses {
          items {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      orders {
        items {
          id
          orderNumber
          orderStatus
          customerId
          dishes {
            name
            dishType
            quantity
            weekDay
          }
          addressId
          finalPrice
          customerComment
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
            orders {
              nextToken
              startedAt
            }
          }
          boxes {
            items {
              id
              orderId
              sticker
              boxStatus
              qrCode
              customerComment
              weekDay
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          address {
            id
            address1
            address2
            city
            postCode
            addressCoordinatesId
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            addressCoordinates {
              id
              latitude
              longitude
              assignedDriverUserId
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            orders {
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
export const createCoordinates = /* GraphQL */ `
  mutation CreateCoordinates(
    $input: CreateCoordinatesInput!
    $condition: ModelCoordinatesConditionInput
  ) {
    createCoordinates(input: $input, condition: $condition) {
      id
      latitude
      longitude
      assignedDriverUserId
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      assignedDriverUser {
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
        coordinates {
          items {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      addresses {
        items {
          id
          address1
          address2
          city
          postCode
          addressCoordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressCoordinates {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
export const updateCoordinates = /* GraphQL */ `
  mutation UpdateCoordinates(
    $input: UpdateCoordinatesInput!
    $condition: ModelCoordinatesConditionInput
  ) {
    updateCoordinates(input: $input, condition: $condition) {
      id
      latitude
      longitude
      assignedDriverUserId
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      assignedDriverUser {
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
        coordinates {
          items {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      addresses {
        items {
          id
          address1
          address2
          city
          postCode
          addressCoordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressCoordinates {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
export const deleteCoordinates = /* GraphQL */ `
  mutation DeleteCoordinates(
    $input: DeleteCoordinatesInput!
    $condition: ModelCoordinatesConditionInput
  ) {
    deleteCoordinates(input: $input, condition: $condition) {
      id
      latitude
      longitude
      assignedDriverUserId
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      assignedDriverUser {
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
        coordinates {
          items {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      addresses {
        items {
          id
          address1
          address2
          city
          postCode
          addressCoordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          addressCoordinates {
            id
            latitude
            longitude
            assignedDriverUserId
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            assignedDriverUser {
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
            }
            addresses {
              nextToken
              startedAt
            }
          }
          orders {
            items {
              id
              orderNumber
              orderStatus
              customerId
              addressId
              finalPrice
              customerComment
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      orderNumber
      orderStatus
      customerId
      dishes {
        name
        dishType
        quantity
        weekDay
      }
      addressId
      finalPrice
      customerComment
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        orders {
          items {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      boxes {
        items {
          id
          orderId
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          order {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      address {
        id
        address1
        address2
        city
        postCode
        addressCoordinatesId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressCoordinates {
          id
          latitude
          longitude
          assignedDriverUserId
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          assignedDriverUser {
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
            coordinates {
              nextToken
              startedAt
            }
          }
          addresses {
            items {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
        orders {
          items {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      orderNumber
      orderStatus
      customerId
      dishes {
        name
        dishType
        quantity
        weekDay
      }
      addressId
      finalPrice
      customerComment
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        orders {
          items {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      boxes {
        items {
          id
          orderId
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          order {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      address {
        id
        address1
        address2
        city
        postCode
        addressCoordinatesId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressCoordinates {
          id
          latitude
          longitude
          assignedDriverUserId
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          assignedDriverUser {
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
            coordinates {
              nextToken
              startedAt
            }
          }
          addresses {
            items {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
        orders {
          items {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      orderNumber
      orderStatus
      customerId
      dishes {
        name
        dishType
        quantity
        weekDay
      }
      addressId
      finalPrice
      customerComment
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        orders {
          items {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      boxes {
        items {
          id
          orderId
          sticker
          boxStatus
          qrCode
          customerComment
          weekDay
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          order {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
      address {
        id
        address1
        address2
        city
        postCode
        addressCoordinatesId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        addressCoordinates {
          id
          latitude
          longitude
          assignedDriverUserId
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          assignedDriverUser {
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
            coordinates {
              nextToken
              startedAt
            }
          }
          addresses {
            items {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
        orders {
          items {
            id
            orderNumber
            orderStatus
            customerId
            dishes {
              name
              dishType
              quantity
              weekDay
            }
            addressId
            finalPrice
            customerComment
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
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
            boxes {
              nextToken
              startedAt
            }
            address {
              id
              address1
              address2
              city
              postCode
              addressCoordinatesId
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
