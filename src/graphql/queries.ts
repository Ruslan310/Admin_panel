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
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const customersByCompanyId = /* GraphQL */ `
  query CustomersByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customersByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
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
        product {
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
        warehouse {
          id
          name
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
        product {
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
        warehouse {
          id
          name
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
        product {
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
        supplier {
          id
          name
          phoneNumber
          email
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
        product {
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
        supplier {
          id
          name
          phoneNumber
          email
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
      nextToken
      startedAt
    }
  }
`;
export const getDishComponent = /* GraphQL */ `
  query GetDishComponent($id: ID!) {
    getDishComponent(id: $id) {
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
export const listDishComponents = /* GraphQL */ `
  query ListDishComponents(
    $filter: ModelDishComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dishId
        componentId
        dish {
          id
          name
          description
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
        dishId
        componentId
        dish {
          id
          name
          description
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
export const dishComponentsByDishId = /* GraphQL */ `
  query DishComponentsByDishId(
    $dishId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDishComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dishComponentsByDishId(
      dishId: $dishId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dishId
        componentId
        dish {
          id
          name
          description
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
export const dishComponentsByComponentId = /* GraphQL */ `
  query DishComponentsByComponentId(
    $componentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDishComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dishComponentsByComponentId(
      componentId: $componentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dishId
        componentId
        dish {
          id
          name
          description
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
export const getComponentProducts = /* GraphQL */ `
  query GetComponentProducts($id: ID!) {
    getComponentProducts(id: $id) {
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
export const listComponentProducts = /* GraphQL */ `
  query ListComponentProducts(
    $filter: ModelComponentProductsFilterInput
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
          typeID
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
export const syncComponentProducts = /* GraphQL */ `
  query SyncComponentProducts(
    $filter: ModelComponentProductsFilterInput
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
          typeID
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
export const componentProductsByComponentId = /* GraphQL */ `
  query ComponentProductsByComponentId(
    $componentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelComponentProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    componentProductsByComponentId(
      componentId: $componentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          typeID
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
export const componentProductsByProductId = /* GraphQL */ `
  query ComponentProductsByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelComponentProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    componentProductsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          typeID
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
