/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      nextToken
      startedAt
    }
  }
`;
export const wPOrdersByWPOrderNumber = /* GraphQL */ `
  query WPOrdersByWPOrderNumber(
    $WPOrderNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelWPOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wPOrdersByWPOrderNumber(
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
      nextToken
      startedAt
    }
  }
`;
export const wPOrdersByAddressID = /* GraphQL */ `
  query WPOrdersByAddressID(
    $addressID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWPOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wPOrdersByAddressID(
      addressID: $addressID
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
      nextToken
      startedAt
    }
  }
`;
export const wPOrdersByCustomerID = /* GraphQL */ `
  query WPOrdersByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWPOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wPOrdersByCustomerID(
      customerID: $customerID
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
      nextToken
      startedAt
    }
  }
`;
export const addressesByPostCode = /* GraphQL */ `
  query AddressesByPostCode(
    $postCode: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressesByPostCode(
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
      nextToken
      startedAt
    }
  }
`;
export const addressesByCoordinateID = /* GraphQL */ `
  query AddressesByCoordinateID(
    $coordinateID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressesByCoordinateID(
      coordinateID: $coordinateID
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
      nextToken
      startedAt
    }
  }
`;
export const coordinatesByUserID = /* GraphQL */ `
  query CoordinatesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCoordinateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coordinatesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      nextToken
      startedAt
    }
  }
`;
export const customersByEmail = /* GraphQL */ `
  query CustomersByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customersByEmail(
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
        wporderID
        WPOrder {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        wporderID
        WPOrder {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const boxesByWporderID = /* GraphQL */ `
  query BoxesByWporderID(
    $wporderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    boxesByWporderID(
      wporderID: $wporderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
