/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      coordinates {
        items {
          id
          latitude
          longitude
          assignedDriverUserId
          verified
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
      coordinates {
        items {
          id
          latitude
          longitude
          assignedDriverUserId
          verified
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
      coordinates {
        items {
          id
          latitude
          longitude
          assignedDriverUserId
          verified
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
`;
export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox {
    onCreateBox {
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
          coordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox {
    onUpdateBox {
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
          coordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox {
    onDeleteBox {
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
          coordinatesId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
      coordinatesId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      coordinates {
        id
        latitude
        longitude
        assignedDriverUserId
        verified
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
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      id
      address1
      address2
      city
      postCode
      coordinatesId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      coordinates {
        id
        latitude
        longitude
        assignedDriverUserId
        verified
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
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      id
      address1
      address2
      city
      postCode
      coordinatesId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      coordinates {
        id
        latitude
        longitude
        assignedDriverUserId
        verified
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
`;
export const onCreateCoordinates = /* GraphQL */ `
  subscription OnCreateCoordinates {
    onCreateCoordinates {
      id
      latitude
      longitude
      assignedDriverUserId
      verified
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
          coordinatesId
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
`;
export const onUpdateCoordinates = /* GraphQL */ `
  subscription OnUpdateCoordinates {
    onUpdateCoordinates {
      id
      latitude
      longitude
      assignedDriverUserId
      verified
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
          coordinatesId
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
`;
export const onDeleteCoordinates = /* GraphQL */ `
  subscription OnDeleteCoordinates {
    onDeleteCoordinates {
      id
      latitude
      longitude
      assignedDriverUserId
      verified
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
          coordinatesId
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
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
        coordinatesId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        coordinates {
          id
          latitude
          longitude
          assignedDriverUserId
          verified
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
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
        coordinatesId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        coordinates {
          id
          latitude
          longitude
          assignedDriverUserId
          verified
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
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
        coordinatesId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        coordinates {
          id
          latitude
          longitude
          assignedDriverUserId
          verified
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
  }
`;
