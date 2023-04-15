/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWPOrder = /* GraphQL */ `
  subscription OnCreateWPOrder($filter: ModelSubscriptionWPOrderFilterInput) {
    onCreateWPOrder(filter: $filter) {
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
export const onUpdateWPOrder = /* GraphQL */ `
  subscription OnUpdateWPOrder($filter: ModelSubscriptionWPOrderFilterInput) {
    onUpdateWPOrder(filter: $filter) {
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
export const onDeleteWPOrder = /* GraphQL */ `
  subscription OnDeleteWPOrder($filter: ModelSubscriptionWPOrderFilterInput) {
    onDeleteWPOrder(filter: $filter) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
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
export const onCreateCoordinate = /* GraphQL */ `
  subscription OnCreateCoordinate(
    $filter: ModelSubscriptionCoordinateFilterInput
  ) {
    onCreateCoordinate(filter: $filter) {
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
export const onUpdateCoordinate = /* GraphQL */ `
  subscription OnUpdateCoordinate(
    $filter: ModelSubscriptionCoordinateFilterInput
  ) {
    onUpdateCoordinate(filter: $filter) {
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
export const onDeleteCoordinate = /* GraphQL */ `
  subscription OnDeleteCoordinate(
    $filter: ModelSubscriptionCoordinateFilterInput
  ) {
    onDeleteCoordinate(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox($filter: ModelSubscriptionBoxFilterInput) {
    onCreateBox(filter: $filter) {
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
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox($filter: ModelSubscriptionBoxFilterInput) {
    onUpdateBox(filter: $filter) {
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
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox($filter: ModelSubscriptionBoxFilterInput) {
    onDeleteBox(filter: $filter) {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish($filter: ModelSubscriptionDishFilterInput) {
    onCreateDish(filter: $filter) {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish($filter: ModelSubscriptionDishFilterInput) {
    onUpdateDish(filter: $filter) {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish($filter: ModelSubscriptionDishFilterInput) {
    onDeleteDish(filter: $filter) {
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
export const onCreateComponent = /* GraphQL */ `
  subscription OnCreateComponent(
    $filter: ModelSubscriptionComponentFilterInput
  ) {
    onCreateComponent(filter: $filter) {
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
export const onUpdateComponent = /* GraphQL */ `
  subscription OnUpdateComponent(
    $filter: ModelSubscriptionComponentFilterInput
  ) {
    onUpdateComponent(filter: $filter) {
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
export const onDeleteComponent = /* GraphQL */ `
  subscription OnDeleteComponent(
    $filter: ModelSubscriptionComponentFilterInput
  ) {
    onDeleteComponent(filter: $filter) {
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
export const onCreateProductAtWarehouse = /* GraphQL */ `
  subscription OnCreateProductAtWarehouse(
    $filter: ModelSubscriptionProductAtWarehouseFilterInput
  ) {
    onCreateProductAtWarehouse(filter: $filter) {
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
export const onUpdateProductAtWarehouse = /* GraphQL */ `
  subscription OnUpdateProductAtWarehouse(
    $filter: ModelSubscriptionProductAtWarehouseFilterInput
  ) {
    onUpdateProductAtWarehouse(filter: $filter) {
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
export const onDeleteProductAtWarehouse = /* GraphQL */ `
  subscription OnDeleteProductAtWarehouse(
    $filter: ModelSubscriptionProductAtWarehouseFilterInput
  ) {
    onDeleteProductAtWarehouse(filter: $filter) {
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
export const onCreateProductFromSupplier = /* GraphQL */ `
  subscription OnCreateProductFromSupplier(
    $filter: ModelSubscriptionProductFromSupplierFilterInput
  ) {
    onCreateProductFromSupplier(filter: $filter) {
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
export const onUpdateProductFromSupplier = /* GraphQL */ `
  subscription OnUpdateProductFromSupplier(
    $filter: ModelSubscriptionProductFromSupplierFilterInput
  ) {
    onUpdateProductFromSupplier(filter: $filter) {
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
export const onDeleteProductFromSupplier = /* GraphQL */ `
  subscription OnDeleteProductFromSupplier(
    $filter: ModelSubscriptionProductFromSupplierFilterInput
  ) {
    onDeleteProductFromSupplier(filter: $filter) {
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
export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onCreateSupplier(filter: $filter) {
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
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onUpdateSupplier(filter: $filter) {
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
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onDeleteSupplier(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType($filter: ModelSubscriptionTypeFilterInput) {
    onCreateType(filter: $filter) {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType($filter: ModelSubscriptionTypeFilterInput) {
    onUpdateType(filter: $filter) {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType($filter: ModelSubscriptionTypeFilterInput) {
    onDeleteType(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onCreateDepartment(filter: $filter) {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onUpdateDepartment(filter: $filter) {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onDeleteDepartment(filter: $filter) {
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
export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
  ) {
    onCreateWarehouse(filter: $filter) {
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
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
  ) {
    onUpdateWarehouse(filter: $filter) {
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
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
  ) {
    onDeleteWarehouse(filter: $filter) {
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
export const onCreateDishComponent = /* GraphQL */ `
  subscription OnCreateDishComponent(
    $filter: ModelSubscriptionDishComponentFilterInput
  ) {
    onCreateDishComponent(filter: $filter) {
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
export const onUpdateDishComponent = /* GraphQL */ `
  subscription OnUpdateDishComponent(
    $filter: ModelSubscriptionDishComponentFilterInput
  ) {
    onUpdateDishComponent(filter: $filter) {
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
export const onDeleteDishComponent = /* GraphQL */ `
  subscription OnDeleteDishComponent(
    $filter: ModelSubscriptionDishComponentFilterInput
  ) {
    onDeleteDishComponent(filter: $filter) {
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
export const onCreateComponentProducts = /* GraphQL */ `
  subscription OnCreateComponentProducts(
    $filter: ModelSubscriptionComponentProductsFilterInput
  ) {
    onCreateComponentProducts(filter: $filter) {
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
export const onUpdateComponentProducts = /* GraphQL */ `
  subscription OnUpdateComponentProducts(
    $filter: ModelSubscriptionComponentProductsFilterInput
  ) {
    onUpdateComponentProducts(filter: $filter) {
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
export const onDeleteComponentProducts = /* GraphQL */ `
  subscription OnDeleteComponentProducts(
    $filter: ModelSubscriptionComponentProductsFilterInput
  ) {
    onDeleteComponentProducts(filter: $filter) {
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
