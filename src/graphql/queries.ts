/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      nextToken
      startedAt
    }
  }
`;
