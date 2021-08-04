/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
