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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox {
    onCreateBox {
      id
      orderId
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
        finalPrice
        customerComment
        boxes {
          nextToken
          startedAt
        }
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
      }
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
  }
`;
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox {
    onUpdateBox {
      id
      orderId
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
        finalPrice
        customerComment
        boxes {
          nextToken
          startedAt
        }
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
      }
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
  }
`;
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox {
    onDeleteBox {
      id
      orderId
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
        finalPrice
        customerComment
        boxes {
          nextToken
          startedAt
        }
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
      }
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
      coordinates {
        id
        latitude
        longitude
        assignedDriverUserId
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
        verified
        name
        addresses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      coordinates {
        id
        latitude
        longitude
        assignedDriverUserId
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
        verified
        name
        addresses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      coordinates {
        id
        latitude
        longitude
        assignedDriverUserId
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
        verified
        name
        addresses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      assignedDriverUser {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      verified
      name
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      assignedDriverUser {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      verified
      name
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      assignedDriverUser {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      verified
      name
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      address {
        id
        address1
        address2
        city
        postCode
        coordinatesId
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      finalPrice
      customerComment
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
        orders {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      address {
        id
        address1
        address2
        city
        postCode
        coordinatesId
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      finalPrice
      customerComment
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
        orders {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      address {
        id
        address1
        address2
        city
        postCode
        coordinatesId
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      finalPrice
      customerComment
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
        orders {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
