/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        orderId
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
  }
`;
export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
      id
      orderId
      order {
        id
        orderNumber
        orderStatus
        customerId
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
export const listBoxs = /* GraphQL */ `
  query ListBoxs(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
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
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCoordinates = /* GraphQL */ `
  query SyncCoordinates(
    $filter: ModelCoordinatesFilterInput
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
      nextToken
      startedAt
    }
  }
`;
export const getCoordinates = /* GraphQL */ `
  query GetCoordinates($id: ID!) {
    getCoordinates(id: $id) {
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
export const listCoordinatess = /* GraphQL */ `
  query ListCoordinatess(
    $filter: ModelCoordinatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoordinatess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        orderNumber
        orderStatus
        customerId
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      orderNumber
      orderStatus
      customerId
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
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderNumber
        orderStatus
        customerId
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
      }
      nextToken
      startedAt
    }
  }
`;
