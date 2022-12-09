/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWPOrderInput = {
  id?: string | null,
  WPOrderNumber: string,
  WPOrderStatus: string,
  WPDishes?: Array< WPDishInput > | null,
  finalPrice: number,
  customerComment?: string | null,
  createdAtWp: number,
  driverName?: string | null,
  companyName?: string | null,
  customerName: string,
  customerAddress: string,
  customerPhoneNumber?: string | null,
  customerEmail?: string | null,
  addressID: string,
  customerID: string,
  _version?: number | null,
};

export type WPDishInput = {
  name: string,
  dishType: string,
  quantity: number,
  weekDay: WEEK_DAY,
};

export enum WEEK_DAY {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  WITHOUT_DAY = "WITHOUT_DAY",
}


export type ModelWPOrderConditionInput = {
  WPOrderNumber?: ModelStringInput | null,
  WPOrderStatus?: ModelStringInput | null,
  finalPrice?: ModelFloatInput | null,
  customerComment?: ModelStringInput | null,
  createdAtWp?: ModelIntInput | null,
  driverName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  customerName?: ModelStringInput | null,
  customerAddress?: ModelStringInput | null,
  customerPhoneNumber?: ModelStringInput | null,
  customerEmail?: ModelStringInput | null,
  addressID?: ModelIDInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelWPOrderConditionInput | null > | null,
  or?: Array< ModelWPOrderConditionInput | null > | null,
  not?: ModelWPOrderConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type WPOrder = {
  __typename: "WPOrder",
  id: string,
  WPOrderNumber: string,
  WPOrderStatus: string,
  WPDishes?:  Array<WPDish > | null,
  finalPrice: number,
  customerComment?: string | null,
  createdAtWp: number,
  boxes?: ModelBoxConnection | null,
  driverName?: string | null,
  companyName?: string | null,
  customerName: string,
  customerAddress: string,
  customerPhoneNumber?: string | null,
  customerEmail?: string | null,
  addressID: string,
  address?: Address | null,
  customerID: string,
  customer?: Customer | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type WPDish = {
  __typename: "WPDish",
  name: string,
  dishType: string,
  quantity: number,
  weekDay: WEEK_DAY,
};

export type ModelBoxConnection = {
  __typename: "ModelBoxConnection",
  items:  Array<Box | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Box = {
  __typename: "Box",
  id: string,
  sticker: string,
  boxStatus: BOX_STATUS,
  qrCode: string,
  customerComment?: string | null,
  weekDay: WEEK_DAY,
  wporderID: string,
  WPOrder?: WPOrder | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum BOX_STATUS {
  NEW = "NEW",
  PRINTED = "PRINTED",
  COOKED = "COOKED",
  IN_DELIVERY = "IN_DELIVERY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}


export type Address = {
  __typename: "Address",
  id: string,
  address1: string,
  address2: string,
  city: string,
  postCode: string,
  WPOrders?: ModelWPOrderConnection | null,
  coordinateID?: string | null,
  coordinate?: Coordinate | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelWPOrderConnection = {
  __typename: "ModelWPOrderConnection",
  items:  Array<WPOrder | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Coordinate = {
  __typename: "Coordinate",
  id: string,
  latitude: number,
  longitude: number,
  name: string,
  userID?: string | null,
  driver?: User | null,
  addresses?: ModelAddressConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  sub: string,
  email: string,
  role: ROLE,
  firstName?: string | null,
  lastName?: string | null,
  avatar?: string | null,
  coordinates?: ModelCoordinateConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum ROLE {
  DELIVERY = "DELIVERY",
  KITCHEN = "KITCHEN",
  ADMIN = "ADMIN",
  GUEST = "GUEST",
}


export type ModelCoordinateConnection = {
  __typename: "ModelCoordinateConnection",
  items:  Array<Coordinate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  wpId?: number | null,
  company?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  phoneNumber?: string | null,
  WPOrders?: ModelWPOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateWPOrderInput = {
  id: string,
  WPOrderNumber?: string | null,
  WPOrderStatus?: string | null,
  WPDishes?: Array< WPDishInput > | null,
  finalPrice?: number | null,
  customerComment?: string | null,
  createdAtWp?: number | null,
  driverName?: string | null,
  companyName?: string | null,
  customerName?: string | null,
  customerAddress?: string | null,
  customerPhoneNumber?: string | null,
  customerEmail?: string | null,
  addressID?: string | null,
  customerID?: string | null,
  _version?: number | null,
};

export type DeleteWPOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateAddressInput = {
  id?: string | null,
  address1: string,
  address2: string,
  city: string,
  postCode: string,
  coordinateID?: string | null,
  _version?: number | null,
};

export type ModelAddressConditionInput = {
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postCode?: ModelStringInput | null,
  coordinateID?: ModelIDInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type UpdateAddressInput = {
  id: string,
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  postCode?: string | null,
  coordinateID?: string | null,
  _version?: number | null,
};

export type DeleteAddressInput = {
  id: string,
  _version?: number | null,
};

export type CreateCoordinateInput = {
  id?: string | null,
  latitude: number,
  longitude: number,
  name: string,
  userID?: string | null,
  _version?: number | null,
};

export type ModelCoordinateConditionInput = {
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCoordinateConditionInput | null > | null,
  or?: Array< ModelCoordinateConditionInput | null > | null,
  not?: ModelCoordinateConditionInput | null,
};

export type UpdateCoordinateInput = {
  id: string,
  latitude?: number | null,
  longitude?: number | null,
  name?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteCoordinateInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  sub: string,
  email: string,
  role: ROLE,
  firstName?: string | null,
  lastName?: string | null,
  avatar?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  sub?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelROLEInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelROLEInput = {
  eq?: ROLE | null,
  ne?: ROLE | null,
};

export type UpdateUserInput = {
  id: string,
  sub?: string | null,
  email?: string | null,
  role?: ROLE | null,
  firstName?: string | null,
  lastName?: string | null,
  avatar?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateCustomerInput = {
  id?: string | null,
  wpId?: number | null,
  company?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  phoneNumber?: string | null,
  _version?: number | null,
};

export type ModelCustomerConditionInput = {
  wpId?: ModelIntInput | null,
  company?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerInput = {
  id: string,
  wpId?: number | null,
  company?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  _version?: number | null,
};

export type DeleteCustomerInput = {
  id: string,
  _version?: number | null,
};

export type CreateBoxInput = {
  id?: string | null,
  sticker: string,
  boxStatus: BOX_STATUS,
  qrCode: string,
  customerComment?: string | null,
  weekDay: WEEK_DAY,
  wporderID: string,
  _version?: number | null,
};

export type ModelBoxConditionInput = {
  sticker?: ModelStringInput | null,
  boxStatus?: ModelBOX_STATUSInput | null,
  qrCode?: ModelStringInput | null,
  customerComment?: ModelStringInput | null,
  weekDay?: ModelWEEK_DAYInput | null,
  wporderID?: ModelIDInput | null,
  and?: Array< ModelBoxConditionInput | null > | null,
  or?: Array< ModelBoxConditionInput | null > | null,
  not?: ModelBoxConditionInput | null,
};

export type ModelBOX_STATUSInput = {
  eq?: BOX_STATUS | null,
  ne?: BOX_STATUS | null,
};

export type ModelWEEK_DAYInput = {
  eq?: WEEK_DAY | null,
  ne?: WEEK_DAY | null,
};

export type UpdateBoxInput = {
  id: string,
  sticker?: string | null,
  boxStatus?: BOX_STATUS | null,
  qrCode?: string | null,
  customerComment?: string | null,
  weekDay?: WEEK_DAY | null,
  wporderID?: string | null,
  _version?: number | null,
};

export type DeleteBoxInput = {
  id: string,
  _version?: number | null,
};

export type CreateDishInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelDishConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDishConditionInput | null > | null,
  or?: Array< ModelDishConditionInput | null > | null,
  not?: ModelDishConditionInput | null,
};

export type Dish = {
  __typename: "Dish",
  id: string,
  name: string,
  description?: string | null,
  components?: ModelDishComponentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelDishComponentConnection = {
  __typename: "ModelDishComponentConnection",
  items:  Array<DishComponent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type DishComponent = {
  __typename: "DishComponent",
  id: string,
  dishId: string,
  componentId: string,
  dish: Dish,
  component: Component,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Component = {
  __typename: "Component",
  id: string,
  name: string,
  type: COMPONENT_TYPE,
  packageType: PACKAGE_TYPE,
  calories: number,
  carbons: number,
  fats: number,
  proteins: number,
  recipe: string,
  price: number,
  picture: string,
  weightInGram: number,
  dishes?: ModelDishComponentConnection | null,
  products?: ModelComponentProductsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum COMPONENT_TYPE {
  MAIN = "MAIN",
  SIDE = "SIDE",
  SOUP = "SOUP",
  SALAD = "SALAD",
  DESSERT = "DESSERT",
}


export enum PACKAGE_TYPE {
  HOT = "HOT",
  COLD = "COLD",
  DESSERT = "DESSERT",
  SOUP = "SOUP",
}


export type ModelComponentProductsConnection = {
  __typename: "ModelComponentProductsConnection",
  items:  Array<ComponentProducts | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ComponentProducts = {
  __typename: "ComponentProducts",
  id: string,
  componentId: string,
  productId: string,
  component: Component,
  product: Product,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  measurement: string,
  productType: Type,
  typeID?: string | null,
  components?: ModelComponentProductsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Type = {
  __typename: "Type",
  id: string,
  name: string,
  category: Category,
  categoryID: string,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  department: Department,
  departmentID: string,
  types?: ModelTypeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Department = {
  __typename: "Department",
  id: string,
  name: string,
  categories?: ModelCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTypeConnection = {
  __typename: "ModelTypeConnection",
  items:  Array<Type | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateDishInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteDishInput = {
  id: string,
  _version?: number | null,
};

export type CreateComponentInput = {
  id?: string | null,
  name: string,
  type: COMPONENT_TYPE,
  packageType: PACKAGE_TYPE,
  calories: number,
  carbons: number,
  fats: number,
  proteins: number,
  recipe: string,
  price: number,
  picture: string,
  weightInGram: number,
  _version?: number | null,
};

export type ModelComponentConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelCOMPONENT_TYPEInput | null,
  packageType?: ModelPACKAGE_TYPEInput | null,
  calories?: ModelIntInput | null,
  carbons?: ModelIntInput | null,
  fats?: ModelIntInput | null,
  proteins?: ModelIntInput | null,
  recipe?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  picture?: ModelStringInput | null,
  weightInGram?: ModelIntInput | null,
  and?: Array< ModelComponentConditionInput | null > | null,
  or?: Array< ModelComponentConditionInput | null > | null,
  not?: ModelComponentConditionInput | null,
};

export type ModelCOMPONENT_TYPEInput = {
  eq?: COMPONENT_TYPE | null,
  ne?: COMPONENT_TYPE | null,
};

export type ModelPACKAGE_TYPEInput = {
  eq?: PACKAGE_TYPE | null,
  ne?: PACKAGE_TYPE | null,
};

export type UpdateComponentInput = {
  id: string,
  name?: string | null,
  type?: COMPONENT_TYPE | null,
  packageType?: PACKAGE_TYPE | null,
  calories?: number | null,
  carbons?: number | null,
  fats?: number | null,
  proteins?: number | null,
  recipe?: string | null,
  price?: number | null,
  picture?: string | null,
  weightInGram?: number | null,
  _version?: number | null,
};

export type DeleteComponentInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductAtWarehouseInput = {
  id?: string | null,
  quantity: number,
  maxQuantity: number,
  minQuantity: number,
  qrCode?: string | null,
  _version?: number | null,
  productAtWarehouseProductId: string,
  productAtWarehouseWarehouseId: string,
};

export type ModelProductAtWarehouseConditionInput = {
  quantity?: ModelIntInput | null,
  maxQuantity?: ModelIntInput | null,
  minQuantity?: ModelIntInput | null,
  qrCode?: ModelStringInput | null,
  and?: Array< ModelProductAtWarehouseConditionInput | null > | null,
  or?: Array< ModelProductAtWarehouseConditionInput | null > | null,
  not?: ModelProductAtWarehouseConditionInput | null,
  productAtWarehouseProductId?: ModelIDInput | null,
  productAtWarehouseWarehouseId?: ModelIDInput | null,
};

export type ProductAtWarehouse = {
  __typename: "ProductAtWarehouse",
  id: string,
  quantity: number,
  maxQuantity: number,
  minQuantity: number,
  product: Product,
  warehouse: Warehouse,
  qrCode?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  productAtWarehouseProductId: string,
  productAtWarehouseWarehouseId: string,
};

export type Warehouse = {
  __typename: "Warehouse",
  id: string,
  name: string,
  address: Address,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  warehouseAddressId: string,
};

export type UpdateProductAtWarehouseInput = {
  id: string,
  quantity?: number | null,
  maxQuantity?: number | null,
  minQuantity?: number | null,
  qrCode?: string | null,
  _version?: number | null,
  productAtWarehouseProductId: string,
  productAtWarehouseWarehouseId: string,
};

export type DeleteProductAtWarehouseInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductFromSupplierInput = {
  id?: string | null,
  price: number,
  quality?: number | null,
  _version?: number | null,
  productFromSupplierProductId: string,
  productFromSupplierSupplierId: string,
};

export type ModelProductFromSupplierConditionInput = {
  price?: ModelFloatInput | null,
  quality?: ModelIntInput | null,
  and?: Array< ModelProductFromSupplierConditionInput | null > | null,
  or?: Array< ModelProductFromSupplierConditionInput | null > | null,
  not?: ModelProductFromSupplierConditionInput | null,
  productFromSupplierProductId?: ModelIDInput | null,
  productFromSupplierSupplierId?: ModelIDInput | null,
};

export type ProductFromSupplier = {
  __typename: "ProductFromSupplier",
  id: string,
  price: number,
  quality?: number | null,
  product: Product,
  supplier: Supplier,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  productFromSupplierProductId: string,
  productFromSupplierSupplierId: string,
};

export type Supplier = {
  __typename: "Supplier",
  id: string,
  name: string,
  phoneNumber?: string | null,
  email?: string | null,
  address: Address,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  supplierAddressId: string,
};

export type UpdateProductFromSupplierInput = {
  id: string,
  price?: number | null,
  quality?: number | null,
  _version?: number | null,
  productFromSupplierProductId: string,
  productFromSupplierSupplierId: string,
};

export type DeleteProductFromSupplierInput = {
  id: string,
  _version?: number | null,
};

export type CreateSupplierInput = {
  id?: string | null,
  name: string,
  phoneNumber?: string | null,
  email?: string | null,
  _version?: number | null,
  supplierAddressId: string,
};

export type ModelSupplierConditionInput = {
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelSupplierConditionInput | null > | null,
  or?: Array< ModelSupplierConditionInput | null > | null,
  not?: ModelSupplierConditionInput | null,
  supplierAddressId?: ModelIDInput | null,
};

export type UpdateSupplierInput = {
  id: string,
  name?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
  _version?: number | null,
  supplierAddressId: string,
};

export type DeleteSupplierInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  measurement: string,
  typeID?: string | null,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  measurement?: ModelStringInput | null,
  typeID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  measurement?: string | null,
  typeID?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateTypeInput = {
  id?: string | null,
  name: string,
  categoryID: string,
  _version?: number | null,
};

export type ModelTypeConditionInput = {
  name?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelTypeConditionInput | null > | null,
  or?: Array< ModelTypeConditionInput | null > | null,
  not?: ModelTypeConditionInput | null,
};

export type UpdateTypeInput = {
  id: string,
  name?: string | null,
  categoryID?: string | null,
  _version?: number | null,
};

export type DeleteTypeInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  departmentID: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  departmentID?: ModelIDInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  departmentID?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteDepartmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateWarehouseInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
  warehouseAddressId: string,
};

export type ModelWarehouseConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelWarehouseConditionInput | null > | null,
  or?: Array< ModelWarehouseConditionInput | null > | null,
  not?: ModelWarehouseConditionInput | null,
  warehouseAddressId?: ModelIDInput | null,
};

export type UpdateWarehouseInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
  warehouseAddressId: string,
};

export type DeleteWarehouseInput = {
  id: string,
  _version?: number | null,
};

export type CreateDishComponentInput = {
  id?: string | null,
  dishId: string,
  componentId: string,
  _version?: number | null,
};

export type ModelDishComponentConditionInput = {
  dishId?: ModelIDInput | null,
  componentId?: ModelIDInput | null,
  and?: Array< ModelDishComponentConditionInput | null > | null,
  or?: Array< ModelDishComponentConditionInput | null > | null,
  not?: ModelDishComponentConditionInput | null,
};

export type UpdateDishComponentInput = {
  id: string,
  dishId?: string | null,
  componentId?: string | null,
  _version?: number | null,
};

export type DeleteDishComponentInput = {
  id: string,
  _version?: number | null,
};

export type CreateComponentProductsInput = {
  id?: string | null,
  componentId: string,
  productId: string,
  _version?: number | null,
};

export type ModelComponentProductsConditionInput = {
  componentId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelComponentProductsConditionInput | null > | null,
  or?: Array< ModelComponentProductsConditionInput | null > | null,
  not?: ModelComponentProductsConditionInput | null,
};

export type UpdateComponentProductsInput = {
  id: string,
  componentId?: string | null,
  productId?: string | null,
  _version?: number | null,
};

export type DeleteComponentProductsInput = {
  id: string,
  _version?: number | null,
};

export type ModelWPOrderFilterInput = {
  id?: ModelIDInput | null,
  WPOrderNumber?: ModelStringInput | null,
  WPOrderStatus?: ModelStringInput | null,
  finalPrice?: ModelFloatInput | null,
  customerComment?: ModelStringInput | null,
  createdAtWp?: ModelIntInput | null,
  driverName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  customerName?: ModelStringInput | null,
  customerAddress?: ModelStringInput | null,
  customerPhoneNumber?: ModelStringInput | null,
  customerEmail?: ModelStringInput | null,
  addressID?: ModelIDInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelWPOrderFilterInput | null > | null,
  or?: Array< ModelWPOrderFilterInput | null > | null,
  not?: ModelWPOrderFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postCode?: ModelStringInput | null,
  coordinateID?: ModelIDInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelCoordinateFilterInput = {
  id?: ModelIDInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCoordinateFilterInput | null > | null,
  or?: Array< ModelCoordinateFilterInput | null > | null,
  not?: ModelCoordinateFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  sub?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelROLEInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  wpId?: ModelIntInput | null,
  company?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBoxFilterInput = {
  id?: ModelIDInput | null,
  sticker?: ModelStringInput | null,
  boxStatus?: ModelBOX_STATUSInput | null,
  qrCode?: ModelStringInput | null,
  customerComment?: ModelStringInput | null,
  weekDay?: ModelWEEK_DAYInput | null,
  wporderID?: ModelIDInput | null,
  and?: Array< ModelBoxFilterInput | null > | null,
  or?: Array< ModelBoxFilterInput | null > | null,
  not?: ModelBoxFilterInput | null,
};

export type ModelDishFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDishFilterInput | null > | null,
  or?: Array< ModelDishFilterInput | null > | null,
  not?: ModelDishFilterInput | null,
};

export type ModelDishConnection = {
  __typename: "ModelDishConnection",
  items:  Array<Dish | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelComponentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelCOMPONENT_TYPEInput | null,
  packageType?: ModelPACKAGE_TYPEInput | null,
  calories?: ModelIntInput | null,
  carbons?: ModelIntInput | null,
  fats?: ModelIntInput | null,
  proteins?: ModelIntInput | null,
  recipe?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  picture?: ModelStringInput | null,
  weightInGram?: ModelIntInput | null,
  and?: Array< ModelComponentFilterInput | null > | null,
  or?: Array< ModelComponentFilterInput | null > | null,
  not?: ModelComponentFilterInput | null,
};

export type ModelComponentConnection = {
  __typename: "ModelComponentConnection",
  items:  Array<Component | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductAtWarehouseFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  maxQuantity?: ModelIntInput | null,
  minQuantity?: ModelIntInput | null,
  qrCode?: ModelStringInput | null,
  and?: Array< ModelProductAtWarehouseFilterInput | null > | null,
  or?: Array< ModelProductAtWarehouseFilterInput | null > | null,
  not?: ModelProductAtWarehouseFilterInput | null,
  productAtWarehouseProductId?: ModelIDInput | null,
  productAtWarehouseWarehouseId?: ModelIDInput | null,
};

export type ModelProductAtWarehouseConnection = {
  __typename: "ModelProductAtWarehouseConnection",
  items:  Array<ProductAtWarehouse | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFromSupplierFilterInput = {
  id?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  quality?: ModelIntInput | null,
  and?: Array< ModelProductFromSupplierFilterInput | null > | null,
  or?: Array< ModelProductFromSupplierFilterInput | null > | null,
  not?: ModelProductFromSupplierFilterInput | null,
  productFromSupplierProductId?: ModelIDInput | null,
  productFromSupplierSupplierId?: ModelIDInput | null,
};

export type ModelProductFromSupplierConnection = {
  __typename: "ModelProductFromSupplierConnection",
  items:  Array<ProductFromSupplier | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSupplierFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelSupplierFilterInput | null > | null,
  or?: Array< ModelSupplierFilterInput | null > | null,
  not?: ModelSupplierFilterInput | null,
  supplierAddressId?: ModelIDInput | null,
};

export type ModelSupplierConnection = {
  __typename: "ModelSupplierConnection",
  items:  Array<Supplier | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  measurement?: ModelStringInput | null,
  typeID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelTypeFilterInput | null > | null,
  or?: Array< ModelTypeFilterInput | null > | null,
  not?: ModelTypeFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  departmentID?: ModelIDInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items:  Array<Department | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWarehouseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelWarehouseFilterInput | null > | null,
  or?: Array< ModelWarehouseFilterInput | null > | null,
  not?: ModelWarehouseFilterInput | null,
  warehouseAddressId?: ModelIDInput | null,
};

export type ModelWarehouseConnection = {
  __typename: "ModelWarehouseConnection",
  items:  Array<Warehouse | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDishComponentFilterInput = {
  id?: ModelIDInput | null,
  dishId?: ModelIDInput | null,
  componentId?: ModelIDInput | null,
  and?: Array< ModelDishComponentFilterInput | null > | null,
  or?: Array< ModelDishComponentFilterInput | null > | null,
  not?: ModelDishComponentFilterInput | null,
};

export type ModelComponentProductsFilterInput = {
  id?: ModelIDInput | null,
  componentId?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  and?: Array< ModelComponentProductsFilterInput | null > | null,
  or?: Array< ModelComponentProductsFilterInput | null > | null,
  not?: ModelComponentProductsFilterInput | null,
};

export type ModelSubscriptionWPOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  WPOrderNumber?: ModelSubscriptionStringInput | null,
  WPOrderStatus?: ModelSubscriptionStringInput | null,
  finalPrice?: ModelSubscriptionFloatInput | null,
  customerComment?: ModelSubscriptionStringInput | null,
  createdAtWp?: ModelSubscriptionIntInput | null,
  driverName?: ModelSubscriptionStringInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  customerName?: ModelSubscriptionStringInput | null,
  customerAddress?: ModelSubscriptionStringInput | null,
  customerPhoneNumber?: ModelSubscriptionStringInput | null,
  customerEmail?: ModelSubscriptionStringInput | null,
  addressID?: ModelSubscriptionIDInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionWPOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionWPOrderFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  address1?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  postCode?: ModelSubscriptionStringInput | null,
  coordinateID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
};

export type ModelSubscriptionCoordinateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  name?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCoordinateFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoordinateFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sub?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  wpId?: ModelSubscriptionIntInput | null,
  company?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionBoxFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sticker?: ModelSubscriptionStringInput | null,
  boxStatus?: ModelSubscriptionStringInput | null,
  qrCode?: ModelSubscriptionStringInput | null,
  customerComment?: ModelSubscriptionStringInput | null,
  weekDay?: ModelSubscriptionStringInput | null,
  wporderID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBoxFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoxFilterInput | null > | null,
};

export type ModelSubscriptionDishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDishFilterInput | null > | null,
  or?: Array< ModelSubscriptionDishFilterInput | null > | null,
};

export type ModelSubscriptionComponentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  packageType?: ModelSubscriptionStringInput | null,
  calories?: ModelSubscriptionIntInput | null,
  carbons?: ModelSubscriptionIntInput | null,
  fats?: ModelSubscriptionIntInput | null,
  proteins?: ModelSubscriptionIntInput | null,
  recipe?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  picture?: ModelSubscriptionStringInput | null,
  weightInGram?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionComponentFilterInput | null > | null,
  or?: Array< ModelSubscriptionComponentFilterInput | null > | null,
};

export type ModelSubscriptionProductAtWarehouseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  maxQuantity?: ModelSubscriptionIntInput | null,
  minQuantity?: ModelSubscriptionIntInput | null,
  qrCode?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductAtWarehouseFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductAtWarehouseFilterInput | null > | null,
};

export type ModelSubscriptionProductFromSupplierFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  price?: ModelSubscriptionFloatInput | null,
  quality?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionProductFromSupplierFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFromSupplierFilterInput | null > | null,
};

export type ModelSubscriptionSupplierFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSupplierFilterInput | null > | null,
  or?: Array< ModelSubscriptionSupplierFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  measurement?: ModelSubscriptionStringInput | null,
  typeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  categoryID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionTypeFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  departmentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
};

export type ModelSubscriptionWarehouseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWarehouseFilterInput | null > | null,
  or?: Array< ModelSubscriptionWarehouseFilterInput | null > | null,
};

export type ModelSubscriptionDishComponentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dishId?: ModelSubscriptionIDInput | null,
  componentId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDishComponentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDishComponentFilterInput | null > | null,
};

export type ModelSubscriptionComponentProductsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  componentId?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionComponentProductsFilterInput | null > | null,
  or?: Array< ModelSubscriptionComponentProductsFilterInput | null > | null,
};

export type CreateWPOrderMutationVariables = {
  input: CreateWPOrderInput,
  condition?: ModelWPOrderConditionInput | null,
};

export type CreateWPOrderMutation = {
  createWPOrder?:  {
    __typename: "WPOrder",
    id: string,
    WPOrderNumber: string,
    WPOrderStatus: string,
    WPDishes?:  Array< {
      __typename: "WPDish",
      name: string,
      dishType: string,
      quantity: number,
      weekDay: WEEK_DAY,
    } > | null,
    finalPrice: number,
    customerComment?: string | null,
    createdAtWp: number,
    boxes?:  {
      __typename: "ModelBoxConnection",
      items:  Array< {
        __typename: "Box",
        id: string,
        sticker: string,
        boxStatus: BOX_STATUS,
        qrCode: string,
        customerComment?: string | null,
        weekDay: WEEK_DAY,
        wporderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    driverName?: string | null,
    companyName?: string | null,
    customerName: string,
    customerAddress: string,
    customerPhoneNumber?: string | null,
    customerEmail?: string | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    customerID: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWPOrderMutationVariables = {
  input: UpdateWPOrderInput,
  condition?: ModelWPOrderConditionInput | null,
};

export type UpdateWPOrderMutation = {
  updateWPOrder?:  {
    __typename: "WPOrder",
    id: string,
    WPOrderNumber: string,
    WPOrderStatus: string,
    WPDishes?:  Array< {
      __typename: "WPDish",
      name: string,
      dishType: string,
      quantity: number,
      weekDay: WEEK_DAY,
    } > | null,
    finalPrice: number,
    customerComment?: string | null,
    createdAtWp: number,
    boxes?:  {
      __typename: "ModelBoxConnection",
      items:  Array< {
        __typename: "Box",
        id: string,
        sticker: string,
        boxStatus: BOX_STATUS,
        qrCode: string,
        customerComment?: string | null,
        weekDay: WEEK_DAY,
        wporderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    driverName?: string | null,
    companyName?: string | null,
    customerName: string,
    customerAddress: string,
    customerPhoneNumber?: string | null,
    customerEmail?: string | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    customerID: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWPOrderMutationVariables = {
  input: DeleteWPOrderInput,
  condition?: ModelWPOrderConditionInput | null,
};

export type DeleteWPOrderMutation = {
  deleteWPOrder?:  {
    __typename: "WPOrder",
    id: string,
    WPOrderNumber: string,
    WPOrderStatus: string,
    WPDishes?:  Array< {
      __typename: "WPDish",
      name: string,
      dishType: string,
      quantity: number,
      weekDay: WEEK_DAY,
    } > | null,
    finalPrice: number,
    customerComment?: string | null,
    createdAtWp: number,
    boxes?:  {
      __typename: "ModelBoxConnection",
      items:  Array< {
        __typename: "Box",
        id: string,
        sticker: string,
        boxStatus: BOX_STATUS,
        qrCode: string,
        customerComment?: string | null,
        weekDay: WEEK_DAY,
        wporderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    driverName?: string | null,
    companyName?: string | null,
    customerName: string,
    customerAddress: string,
    customerPhoneNumber?: string | null,
    customerEmail?: string | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    customerID: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    address1: string,
    address2: string,
    city: string,
    postCode: string,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coordinateID?: string | null,
    coordinate?:  {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    address1: string,
    address2: string,
    city: string,
    postCode: string,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coordinateID?: string | null,
    coordinate?:  {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    address1: string,
    address2: string,
    city: string,
    postCode: string,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coordinateID?: string | null,
    coordinate?:  {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCoordinateMutationVariables = {
  input: CreateCoordinateInput,
  condition?: ModelCoordinateConditionInput | null,
};

export type CreateCoordinateMutation = {
  createCoordinate?:  {
    __typename: "Coordinate",
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    userID?: string | null,
    driver?:  {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCoordinateMutationVariables = {
  input: UpdateCoordinateInput,
  condition?: ModelCoordinateConditionInput | null,
};

export type UpdateCoordinateMutation = {
  updateCoordinate?:  {
    __typename: "Coordinate",
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    userID?: string | null,
    driver?:  {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCoordinateMutationVariables = {
  input: DeleteCoordinateInput,
  condition?: ModelCoordinateConditionInput | null,
};

export type DeleteCoordinateMutation = {
  deleteCoordinate?:  {
    __typename: "Coordinate",
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    userID?: string | null,
    driver?:  {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    email: string,
    role: ROLE,
    firstName?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    coordinates?:  {
      __typename: "ModelCoordinateConnection",
      items:  Array< {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    email: string,
    role: ROLE,
    firstName?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    coordinates?:  {
      __typename: "ModelCoordinateConnection",
      items:  Array< {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    email: string,
    role: ROLE,
    firstName?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    coordinates?:  {
      __typename: "ModelCoordinateConnection",
      items:  Array< {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    wpId?: number | null,
    company?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    phoneNumber?: string | null,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    wpId?: number | null,
    company?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    phoneNumber?: string | null,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    wpId?: number | null,
    company?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    phoneNumber?: string | null,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBoxMutationVariables = {
  input: CreateBoxInput,
  condition?: ModelBoxConditionInput | null,
};

export type CreateBoxMutation = {
  createBox?:  {
    __typename: "Box",
    id: string,
    sticker: string,
    boxStatus: BOX_STATUS,
    qrCode: string,
    customerComment?: string | null,
    weekDay: WEEK_DAY,
    wporderID: string,
    WPOrder?:  {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBoxMutationVariables = {
  input: UpdateBoxInput,
  condition?: ModelBoxConditionInput | null,
};

export type UpdateBoxMutation = {
  updateBox?:  {
    __typename: "Box",
    id: string,
    sticker: string,
    boxStatus: BOX_STATUS,
    qrCode: string,
    customerComment?: string | null,
    weekDay: WEEK_DAY,
    wporderID: string,
    WPOrder?:  {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBoxMutationVariables = {
  input: DeleteBoxInput,
  condition?: ModelBoxConditionInput | null,
};

export type DeleteBoxMutation = {
  deleteBox?:  {
    __typename: "Box",
    id: string,
    sticker: string,
    boxStatus: BOX_STATUS,
    qrCode: string,
    customerComment?: string | null,
    weekDay: WEEK_DAY,
    wporderID: string,
    WPOrder?:  {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDishMutationVariables = {
  input: CreateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type CreateDishMutation = {
  createDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    components?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDishMutationVariables = {
  input: UpdateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type UpdateDishMutation = {
  updateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    components?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDishMutationVariables = {
  input: DeleteDishInput,
  condition?: ModelDishConditionInput | null,
};

export type DeleteDishMutation = {
  deleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    components?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateComponentMutationVariables = {
  input: CreateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type CreateComponentMutation = {
  createComponent?:  {
    __typename: "Component",
    id: string,
    name: string,
    type: COMPONENT_TYPE,
    packageType: PACKAGE_TYPE,
    calories: number,
    carbons: number,
    fats: number,
    proteins: number,
    recipe: string,
    price: number,
    picture: string,
    weightInGram: number,
    dishes?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    products?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateComponentMutationVariables = {
  input: UpdateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type UpdateComponentMutation = {
  updateComponent?:  {
    __typename: "Component",
    id: string,
    name: string,
    type: COMPONENT_TYPE,
    packageType: PACKAGE_TYPE,
    calories: number,
    carbons: number,
    fats: number,
    proteins: number,
    recipe: string,
    price: number,
    picture: string,
    weightInGram: number,
    dishes?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    products?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteComponentMutationVariables = {
  input: DeleteComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type DeleteComponentMutation = {
  deleteComponent?:  {
    __typename: "Component",
    id: string,
    name: string,
    type: COMPONENT_TYPE,
    packageType: PACKAGE_TYPE,
    calories: number,
    carbons: number,
    fats: number,
    proteins: number,
    recipe: string,
    price: number,
    picture: string,
    weightInGram: number,
    dishes?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    products?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductAtWarehouseMutationVariables = {
  input: CreateProductAtWarehouseInput,
  condition?: ModelProductAtWarehouseConditionInput | null,
};

export type CreateProductAtWarehouseMutation = {
  createProductAtWarehouse?:  {
    __typename: "ProductAtWarehouse",
    id: string,
    quantity: number,
    maxQuantity: number,
    minQuantity: number,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    },
    qrCode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productAtWarehouseProductId: string,
    productAtWarehouseWarehouseId: string,
  } | null,
};

export type UpdateProductAtWarehouseMutationVariables = {
  input: UpdateProductAtWarehouseInput,
  condition?: ModelProductAtWarehouseConditionInput | null,
};

export type UpdateProductAtWarehouseMutation = {
  updateProductAtWarehouse?:  {
    __typename: "ProductAtWarehouse",
    id: string,
    quantity: number,
    maxQuantity: number,
    minQuantity: number,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    },
    qrCode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productAtWarehouseProductId: string,
    productAtWarehouseWarehouseId: string,
  } | null,
};

export type DeleteProductAtWarehouseMutationVariables = {
  input: DeleteProductAtWarehouseInput,
  condition?: ModelProductAtWarehouseConditionInput | null,
};

export type DeleteProductAtWarehouseMutation = {
  deleteProductAtWarehouse?:  {
    __typename: "ProductAtWarehouse",
    id: string,
    quantity: number,
    maxQuantity: number,
    minQuantity: number,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    },
    qrCode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productAtWarehouseProductId: string,
    productAtWarehouseWarehouseId: string,
  } | null,
};

export type CreateProductFromSupplierMutationVariables = {
  input: CreateProductFromSupplierInput,
  condition?: ModelProductFromSupplierConditionInput | null,
};

export type CreateProductFromSupplierMutation = {
  createProductFromSupplier?:  {
    __typename: "ProductFromSupplier",
    id: string,
    price: number,
    quality?: number | null,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    supplier:  {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productFromSupplierProductId: string,
    productFromSupplierSupplierId: string,
  } | null,
};

export type UpdateProductFromSupplierMutationVariables = {
  input: UpdateProductFromSupplierInput,
  condition?: ModelProductFromSupplierConditionInput | null,
};

export type UpdateProductFromSupplierMutation = {
  updateProductFromSupplier?:  {
    __typename: "ProductFromSupplier",
    id: string,
    price: number,
    quality?: number | null,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    supplier:  {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productFromSupplierProductId: string,
    productFromSupplierSupplierId: string,
  } | null,
};

export type DeleteProductFromSupplierMutationVariables = {
  input: DeleteProductFromSupplierInput,
  condition?: ModelProductFromSupplierConditionInput | null,
};

export type DeleteProductFromSupplierMutation = {
  deleteProductFromSupplier?:  {
    __typename: "ProductFromSupplier",
    id: string,
    price: number,
    quality?: number | null,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    supplier:  {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productFromSupplierProductId: string,
    productFromSupplierSupplierId: string,
  } | null,
};

export type CreateSupplierMutationVariables = {
  input: CreateSupplierInput,
  condition?: ModelSupplierConditionInput | null,
};

export type CreateSupplierMutation = {
  createSupplier?:  {
    __typename: "Supplier",
    id: string,
    name: string,
    phoneNumber?: string | null,
    email?: string | null,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    supplierAddressId: string,
  } | null,
};

export type UpdateSupplierMutationVariables = {
  input: UpdateSupplierInput,
  condition?: ModelSupplierConditionInput | null,
};

export type UpdateSupplierMutation = {
  updateSupplier?:  {
    __typename: "Supplier",
    id: string,
    name: string,
    phoneNumber?: string | null,
    email?: string | null,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    supplierAddressId: string,
  } | null,
};

export type DeleteSupplierMutationVariables = {
  input: DeleteSupplierInput,
  condition?: ModelSupplierConditionInput | null,
};

export type DeleteSupplierMutation = {
  deleteSupplier?:  {
    __typename: "Supplier",
    id: string,
    name: string,
    phoneNumber?: string | null,
    email?: string | null,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    supplierAddressId: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    measurement: string,
    productType:  {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    typeID?: string | null,
    components?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    measurement: string,
    productType:  {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    typeID?: string | null,
    components?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    measurement: string,
    productType:  {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    typeID?: string | null,
    components?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTypeMutationVariables = {
  input: CreateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type CreateTypeMutation = {
  createType?:  {
    __typename: "Type",
    id: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categoryID: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTypeMutationVariables = {
  input: UpdateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type UpdateTypeMutation = {
  updateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categoryID: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTypeMutationVariables = {
  input: DeleteTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type DeleteTypeMutation = {
  deleteType?:  {
    __typename: "Type",
    id: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categoryID: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    departmentID: string,
    types?:  {
      __typename: "ModelTypeConnection",
      items:  Array< {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    departmentID: string,
    types?:  {
      __typename: "ModelTypeConnection",
      items:  Array< {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    departmentID: string,
    types?:  {
      __typename: "ModelTypeConnection",
      items:  Array< {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateWarehouseMutationVariables = {
  input: CreateWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type CreateWarehouseMutation = {
  createWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    warehouseAddressId: string,
  } | null,
};

export type UpdateWarehouseMutationVariables = {
  input: UpdateWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type UpdateWarehouseMutation = {
  updateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    warehouseAddressId: string,
  } | null,
};

export type DeleteWarehouseMutationVariables = {
  input: DeleteWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type DeleteWarehouseMutation = {
  deleteWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    warehouseAddressId: string,
  } | null,
};

export type CreateDishComponentMutationVariables = {
  input: CreateDishComponentInput,
  condition?: ModelDishComponentConditionInput | null,
};

export type CreateDishComponentMutation = {
  createDishComponent?:  {
    __typename: "DishComponent",
    id: string,
    dishId: string,
    componentId: string,
    dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDishComponentMutationVariables = {
  input: UpdateDishComponentInput,
  condition?: ModelDishComponentConditionInput | null,
};

export type UpdateDishComponentMutation = {
  updateDishComponent?:  {
    __typename: "DishComponent",
    id: string,
    dishId: string,
    componentId: string,
    dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDishComponentMutationVariables = {
  input: DeleteDishComponentInput,
  condition?: ModelDishComponentConditionInput | null,
};

export type DeleteDishComponentMutation = {
  deleteDishComponent?:  {
    __typename: "DishComponent",
    id: string,
    dishId: string,
    componentId: string,
    dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateComponentProductsMutationVariables = {
  input: CreateComponentProductsInput,
  condition?: ModelComponentProductsConditionInput | null,
};

export type CreateComponentProductsMutation = {
  createComponentProducts?:  {
    __typename: "ComponentProducts",
    id: string,
    componentId: string,
    productId: string,
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateComponentProductsMutationVariables = {
  input: UpdateComponentProductsInput,
  condition?: ModelComponentProductsConditionInput | null,
};

export type UpdateComponentProductsMutation = {
  updateComponentProducts?:  {
    __typename: "ComponentProducts",
    id: string,
    componentId: string,
    productId: string,
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteComponentProductsMutationVariables = {
  input: DeleteComponentProductsInput,
  condition?: ModelComponentProductsConditionInput | null,
};

export type DeleteComponentProductsMutation = {
  deleteComponentProducts?:  {
    __typename: "ComponentProducts",
    id: string,
    componentId: string,
    productId: string,
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetWPOrderQueryVariables = {
  id: string,
};

export type GetWPOrderQuery = {
  getWPOrder?:  {
    __typename: "WPOrder",
    id: string,
    WPOrderNumber: string,
    WPOrderStatus: string,
    WPDishes?:  Array< {
      __typename: "WPDish",
      name: string,
      dishType: string,
      quantity: number,
      weekDay: WEEK_DAY,
    } > | null,
    finalPrice: number,
    customerComment?: string | null,
    createdAtWp: number,
    boxes?:  {
      __typename: "ModelBoxConnection",
      items:  Array< {
        __typename: "Box",
        id: string,
        sticker: string,
        boxStatus: BOX_STATUS,
        qrCode: string,
        customerComment?: string | null,
        weekDay: WEEK_DAY,
        wporderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    driverName?: string | null,
    companyName?: string | null,
    customerName: string,
    customerAddress: string,
    customerPhoneNumber?: string | null,
    customerEmail?: string | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    customerID: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWPOrdersQueryVariables = {
  filter?: ModelWPOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWPOrdersQuery = {
  listWPOrders?:  {
    __typename: "ModelWPOrderConnection",
    items:  Array< {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWPOrdersQueryVariables = {
  filter?: ModelWPOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWPOrdersQuery = {
  syncWPOrders?:  {
    __typename: "ModelWPOrderConnection",
    items:  Array< {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type WPOrdersByWPOrderNumberQueryVariables = {
  WPOrderNumber: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWPOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WPOrdersByWPOrderNumberQuery = {
  wPOrdersByWPOrderNumber?:  {
    __typename: "ModelWPOrderConnection",
    items:  Array< {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type WPOrdersByAddressIDQueryVariables = {
  addressID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWPOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WPOrdersByAddressIDQuery = {
  wPOrdersByAddressID?:  {
    __typename: "ModelWPOrderConnection",
    items:  Array< {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type WPOrdersByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWPOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WPOrdersByCustomerIDQuery = {
  wPOrdersByCustomerID?:  {
    __typename: "ModelWPOrderConnection",
    items:  Array< {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    address1: string,
    address2: string,
    city: string,
    postCode: string,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coordinateID?: string | null,
    coordinate?:  {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAddressesQuery = {
  syncAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AddressesByPostCodeQueryVariables = {
  postCode: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AddressesByPostCodeQuery = {
  addressesByPostCode?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AddressesByCoordinateIDQueryVariables = {
  coordinateID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AddressesByCoordinateIDQuery = {
  addressesByCoordinateID?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCoordinateQueryVariables = {
  id: string,
};

export type GetCoordinateQuery = {
  getCoordinate?:  {
    __typename: "Coordinate",
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    userID?: string | null,
    driver?:  {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCoordinatesQueryVariables = {
  filter?: ModelCoordinateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoordinatesQuery = {
  listCoordinates?:  {
    __typename: "ModelCoordinateConnection",
    items:  Array< {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCoordinatesQueryVariables = {
  filter?: ModelCoordinateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCoordinatesQuery = {
  syncCoordinates?:  {
    __typename: "ModelCoordinateConnection",
    items:  Array< {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CoordinatesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoordinateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoordinatesByUserIDQuery = {
  coordinatesByUserID?:  {
    __typename: "ModelCoordinateConnection",
    items:  Array< {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    email: string,
    role: ROLE,
    firstName?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    coordinates?:  {
      __typename: "ModelCoordinateConnection",
      items:  Array< {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    wpId?: number | null,
    company?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    phoneNumber?: string | null,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCustomersQuery = {
  syncCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CustomersByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CustomersByEmailQuery = {
  customersByEmail?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBoxQueryVariables = {
  id: string,
};

export type GetBoxQuery = {
  getBox?:  {
    __typename: "Box",
    id: string,
    sticker: string,
    boxStatus: BOX_STATUS,
    qrCode: string,
    customerComment?: string | null,
    weekDay: WEEK_DAY,
    wporderID: string,
    WPOrder?:  {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBoxesQueryVariables = {
  filter?: ModelBoxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoxesQuery = {
  listBoxes?:  {
    __typename: "ModelBoxConnection",
    items:  Array< {
      __typename: "Box",
      id: string,
      sticker: string,
      boxStatus: BOX_STATUS,
      qrCode: string,
      customerComment?: string | null,
      weekDay: WEEK_DAY,
      wporderID: string,
      WPOrder?:  {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBoxesQueryVariables = {
  filter?: ModelBoxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBoxesQuery = {
  syncBoxes?:  {
    __typename: "ModelBoxConnection",
    items:  Array< {
      __typename: "Box",
      id: string,
      sticker: string,
      boxStatus: BOX_STATUS,
      qrCode: string,
      customerComment?: string | null,
      weekDay: WEEK_DAY,
      wporderID: string,
      WPOrder?:  {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BoxesByWporderIDQueryVariables = {
  wporderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBoxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BoxesByWporderIDQuery = {
  boxesByWporderID?:  {
    __typename: "ModelBoxConnection",
    items:  Array< {
      __typename: "Box",
      id: string,
      sticker: string,
      boxStatus: BOX_STATUS,
      qrCode: string,
      customerComment?: string | null,
      weekDay: WEEK_DAY,
      wporderID: string,
      WPOrder?:  {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDishQueryVariables = {
  id: string,
};

export type GetDishQuery = {
  getDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    components?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDishesQueryVariables = {
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDishesQuery = {
  listDishes?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDishesQueryVariables = {
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDishesQuery = {
  syncDishes?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetComponentQueryVariables = {
  id: string,
};

export type GetComponentQuery = {
  getComponent?:  {
    __typename: "Component",
    id: string,
    name: string,
    type: COMPONENT_TYPE,
    packageType: PACKAGE_TYPE,
    calories: number,
    carbons: number,
    fats: number,
    proteins: number,
    recipe: string,
    price: number,
    picture: string,
    weightInGram: number,
    dishes?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    products?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListComponentsQueryVariables = {
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComponentsQuery = {
  listComponents?:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncComponentsQueryVariables = {
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncComponentsQuery = {
  syncComponents?:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductAtWarehouseQueryVariables = {
  id: string,
};

export type GetProductAtWarehouseQuery = {
  getProductAtWarehouse?:  {
    __typename: "ProductAtWarehouse",
    id: string,
    quantity: number,
    maxQuantity: number,
    minQuantity: number,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    },
    qrCode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productAtWarehouseProductId: string,
    productAtWarehouseWarehouseId: string,
  } | null,
};

export type ListProductAtWarehousesQueryVariables = {
  filter?: ModelProductAtWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductAtWarehousesQuery = {
  listProductAtWarehouses?:  {
    __typename: "ModelProductAtWarehouseConnection",
    items:  Array< {
      __typename: "ProductAtWarehouse",
      id: string,
      quantity: number,
      maxQuantity: number,
      minQuantity: number,
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      warehouse:  {
        __typename: "Warehouse",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        warehouseAddressId: string,
      },
      qrCode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productAtWarehouseProductId: string,
      productAtWarehouseWarehouseId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductAtWarehousesQueryVariables = {
  filter?: ModelProductAtWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductAtWarehousesQuery = {
  syncProductAtWarehouses?:  {
    __typename: "ModelProductAtWarehouseConnection",
    items:  Array< {
      __typename: "ProductAtWarehouse",
      id: string,
      quantity: number,
      maxQuantity: number,
      minQuantity: number,
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      warehouse:  {
        __typename: "Warehouse",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        warehouseAddressId: string,
      },
      qrCode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productAtWarehouseProductId: string,
      productAtWarehouseWarehouseId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductFromSupplierQueryVariables = {
  id: string,
};

export type GetProductFromSupplierQuery = {
  getProductFromSupplier?:  {
    __typename: "ProductFromSupplier",
    id: string,
    price: number,
    quality?: number | null,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    supplier:  {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productFromSupplierProductId: string,
    productFromSupplierSupplierId: string,
  } | null,
};

export type ListProductFromSuppliersQueryVariables = {
  filter?: ModelProductFromSupplierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductFromSuppliersQuery = {
  listProductFromSuppliers?:  {
    __typename: "ModelProductFromSupplierConnection",
    items:  Array< {
      __typename: "ProductFromSupplier",
      id: string,
      price: number,
      quality?: number | null,
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      supplier:  {
        __typename: "Supplier",
        id: string,
        name: string,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        supplierAddressId: string,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productFromSupplierProductId: string,
      productFromSupplierSupplierId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductFromSuppliersQueryVariables = {
  filter?: ModelProductFromSupplierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductFromSuppliersQuery = {
  syncProductFromSuppliers?:  {
    __typename: "ModelProductFromSupplierConnection",
    items:  Array< {
      __typename: "ProductFromSupplier",
      id: string,
      price: number,
      quality?: number | null,
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      supplier:  {
        __typename: "Supplier",
        id: string,
        name: string,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        supplierAddressId: string,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productFromSupplierProductId: string,
      productFromSupplierSupplierId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSupplierQueryVariables = {
  id: string,
};

export type GetSupplierQuery = {
  getSupplier?:  {
    __typename: "Supplier",
    id: string,
    name: string,
    phoneNumber?: string | null,
    email?: string | null,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    supplierAddressId: string,
  } | null,
};

export type ListSuppliersQueryVariables = {
  filter?: ModelSupplierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSuppliersQuery = {
  listSuppliers?:  {
    __typename: "ModelSupplierConnection",
    items:  Array< {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSuppliersQueryVariables = {
  filter?: ModelSupplierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSuppliersQuery = {
  syncSuppliers?:  {
    __typename: "ModelSupplierConnection",
    items:  Array< {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    measurement: string,
    productType:  {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    typeID?: string | null,
    components?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTypeQueryVariables = {
  id: string,
};

export type GetTypeQuery = {
  getType?:  {
    __typename: "Type",
    id: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categoryID: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTypesQueryVariables = {
  filter?: ModelTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTypesQuery = {
  listTypes?:  {
    __typename: "ModelTypeConnection",
    items:  Array< {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTypesQueryVariables = {
  filter?: ModelTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTypesQuery = {
  syncTypes?:  {
    __typename: "ModelTypeConnection",
    items:  Array< {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    departmentID: string,
    types?:  {
      __typename: "ModelTypeConnection",
      items:  Array< {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDepartmentsQuery = {
  syncDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWarehouseQueryVariables = {
  id: string,
};

export type GetWarehouseQuery = {
  getWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    warehouseAddressId: string,
  } | null,
};

export type ListWarehousesQueryVariables = {
  filter?: ModelWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWarehousesQuery = {
  listWarehouses?:  {
    __typename: "ModelWarehouseConnection",
    items:  Array< {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWarehousesQueryVariables = {
  filter?: ModelWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWarehousesQuery = {
  syncWarehouses?:  {
    __typename: "ModelWarehouseConnection",
    items:  Array< {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDishComponentQueryVariables = {
  id: string,
};

export type GetDishComponentQuery = {
  getDishComponent?:  {
    __typename: "DishComponent",
    id: string,
    dishId: string,
    componentId: string,
    dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDishComponentsQueryVariables = {
  filter?: ModelDishComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDishComponentsQuery = {
  listDishComponents?:  {
    __typename: "ModelDishComponentConnection",
    items:  Array< {
      __typename: "DishComponent",
      id: string,
      dishId: string,
      componentId: string,
      dish:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDishComponentsQueryVariables = {
  filter?: ModelDishComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDishComponentsQuery = {
  syncDishComponents?:  {
    __typename: "ModelDishComponentConnection",
    items:  Array< {
      __typename: "DishComponent",
      id: string,
      dishId: string,
      componentId: string,
      dish:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DishComponentsByDishIdQueryVariables = {
  dishId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDishComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DishComponentsByDishIdQuery = {
  dishComponentsByDishId?:  {
    __typename: "ModelDishComponentConnection",
    items:  Array< {
      __typename: "DishComponent",
      id: string,
      dishId: string,
      componentId: string,
      dish:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DishComponentsByComponentIdQueryVariables = {
  componentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDishComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DishComponentsByComponentIdQuery = {
  dishComponentsByComponentId?:  {
    __typename: "ModelDishComponentConnection",
    items:  Array< {
      __typename: "DishComponent",
      id: string,
      dishId: string,
      componentId: string,
      dish:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetComponentProductsQueryVariables = {
  id: string,
};

export type GetComponentProductsQuery = {
  getComponentProducts?:  {
    __typename: "ComponentProducts",
    id: string,
    componentId: string,
    productId: string,
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListComponentProductsQueryVariables = {
  filter?: ModelComponentProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComponentProductsQuery = {
  listComponentProducts?:  {
    __typename: "ModelComponentProductsConnection",
    items:  Array< {
      __typename: "ComponentProducts",
      id: string,
      componentId: string,
      productId: string,
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncComponentProductsQueryVariables = {
  filter?: ModelComponentProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncComponentProductsQuery = {
  syncComponentProducts?:  {
    __typename: "ModelComponentProductsConnection",
    items:  Array< {
      __typename: "ComponentProducts",
      id: string,
      componentId: string,
      productId: string,
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ComponentProductsByComponentIdQueryVariables = {
  componentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComponentProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComponentProductsByComponentIdQuery = {
  componentProductsByComponentId?:  {
    __typename: "ModelComponentProductsConnection",
    items:  Array< {
      __typename: "ComponentProducts",
      id: string,
      componentId: string,
      productId: string,
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ComponentProductsByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComponentProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComponentProductsByProductIdQuery = {
  componentProductsByProductId?:  {
    __typename: "ModelComponentProductsConnection",
    items:  Array< {
      __typename: "ComponentProducts",
      id: string,
      componentId: string,
      productId: string,
      component:  {
        __typename: "Component",
        id: string,
        name: string,
        type: COMPONENT_TYPE,
        packageType: PACKAGE_TYPE,
        calories: number,
        carbons: number,
        fats: number,
        proteins: number,
        recipe: string,
        price: number,
        picture: string,
        weightInGram: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWPOrderSubscriptionVariables = {
  filter?: ModelSubscriptionWPOrderFilterInput | null,
};

export type OnCreateWPOrderSubscription = {
  onCreateWPOrder?:  {
    __typename: "WPOrder",
    id: string,
    WPOrderNumber: string,
    WPOrderStatus: string,
    WPDishes?:  Array< {
      __typename: "WPDish",
      name: string,
      dishType: string,
      quantity: number,
      weekDay: WEEK_DAY,
    } > | null,
    finalPrice: number,
    customerComment?: string | null,
    createdAtWp: number,
    boxes?:  {
      __typename: "ModelBoxConnection",
      items:  Array< {
        __typename: "Box",
        id: string,
        sticker: string,
        boxStatus: BOX_STATUS,
        qrCode: string,
        customerComment?: string | null,
        weekDay: WEEK_DAY,
        wporderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    driverName?: string | null,
    companyName?: string | null,
    customerName: string,
    customerAddress: string,
    customerPhoneNumber?: string | null,
    customerEmail?: string | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    customerID: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWPOrderSubscriptionVariables = {
  filter?: ModelSubscriptionWPOrderFilterInput | null,
};

export type OnUpdateWPOrderSubscription = {
  onUpdateWPOrder?:  {
    __typename: "WPOrder",
    id: string,
    WPOrderNumber: string,
    WPOrderStatus: string,
    WPDishes?:  Array< {
      __typename: "WPDish",
      name: string,
      dishType: string,
      quantity: number,
      weekDay: WEEK_DAY,
    } > | null,
    finalPrice: number,
    customerComment?: string | null,
    createdAtWp: number,
    boxes?:  {
      __typename: "ModelBoxConnection",
      items:  Array< {
        __typename: "Box",
        id: string,
        sticker: string,
        boxStatus: BOX_STATUS,
        qrCode: string,
        customerComment?: string | null,
        weekDay: WEEK_DAY,
        wporderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    driverName?: string | null,
    companyName?: string | null,
    customerName: string,
    customerAddress: string,
    customerPhoneNumber?: string | null,
    customerEmail?: string | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    customerID: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWPOrderSubscriptionVariables = {
  filter?: ModelSubscriptionWPOrderFilterInput | null,
};

export type OnDeleteWPOrderSubscription = {
  onDeleteWPOrder?:  {
    __typename: "WPOrder",
    id: string,
    WPOrderNumber: string,
    WPOrderStatus: string,
    WPDishes?:  Array< {
      __typename: "WPDish",
      name: string,
      dishType: string,
      quantity: number,
      weekDay: WEEK_DAY,
    } > | null,
    finalPrice: number,
    customerComment?: string | null,
    createdAtWp: number,
    boxes?:  {
      __typename: "ModelBoxConnection",
      items:  Array< {
        __typename: "Box",
        id: string,
        sticker: string,
        boxStatus: BOX_STATUS,
        qrCode: string,
        customerComment?: string | null,
        weekDay: WEEK_DAY,
        wporderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    driverName?: string | null,
    companyName?: string | null,
    customerName: string,
    customerAddress: string,
    customerPhoneNumber?: string | null,
    customerEmail?: string | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    customerID: string,
    customer?:  {
      __typename: "Customer",
      id: string,
      wpId?: number | null,
      company?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      phoneNumber?: string | null,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    address1: string,
    address2: string,
    city: string,
    postCode: string,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coordinateID?: string | null,
    coordinate?:  {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    address1: string,
    address2: string,
    city: string,
    postCode: string,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coordinateID?: string | null,
    coordinate?:  {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    address1: string,
    address2: string,
    city: string,
    postCode: string,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coordinateID?: string | null,
    coordinate?:  {
      __typename: "Coordinate",
      id: string,
      latitude: number,
      longitude: number,
      name: string,
      userID?: string | null,
      driver?:  {
        __typename: "User",
        id: string,
        sub: string,
        email: string,
        role: ROLE,
        firstName?: string | null,
        lastName?: string | null,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCoordinateSubscriptionVariables = {
  filter?: ModelSubscriptionCoordinateFilterInput | null,
};

export type OnCreateCoordinateSubscription = {
  onCreateCoordinate?:  {
    __typename: "Coordinate",
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    userID?: string | null,
    driver?:  {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCoordinateSubscriptionVariables = {
  filter?: ModelSubscriptionCoordinateFilterInput | null,
};

export type OnUpdateCoordinateSubscription = {
  onUpdateCoordinate?:  {
    __typename: "Coordinate",
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    userID?: string | null,
    driver?:  {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCoordinateSubscriptionVariables = {
  filter?: ModelSubscriptionCoordinateFilterInput | null,
};

export type OnDeleteCoordinateSubscription = {
  onDeleteCoordinate?:  {
    __typename: "Coordinate",
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    userID?: string | null,
    driver?:  {
      __typename: "User",
      id: string,
      sub: string,
      email: string,
      role: ROLE,
      firstName?: string | null,
      lastName?: string | null,
      avatar?: string | null,
      coordinates?:  {
        __typename: "ModelCoordinateConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    email: string,
    role: ROLE,
    firstName?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    coordinates?:  {
      __typename: "ModelCoordinateConnection",
      items:  Array< {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    email: string,
    role: ROLE,
    firstName?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    coordinates?:  {
      __typename: "ModelCoordinateConnection",
      items:  Array< {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    sub: string,
    email: string,
    role: ROLE,
    firstName?: string | null,
    lastName?: string | null,
    avatar?: string | null,
    coordinates?:  {
      __typename: "ModelCoordinateConnection",
      items:  Array< {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    wpId?: number | null,
    company?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    phoneNumber?: string | null,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    wpId?: number | null,
    company?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    phoneNumber?: string | null,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    wpId?: number | null,
    company?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    phoneNumber?: string | null,
    WPOrders?:  {
      __typename: "ModelWPOrderConnection",
      items:  Array< {
        __typename: "WPOrder",
        id: string,
        WPOrderNumber: string,
        WPOrderStatus: string,
        finalPrice: number,
        customerComment?: string | null,
        createdAtWp: number,
        driverName?: string | null,
        companyName?: string | null,
        customerName: string,
        customerAddress: string,
        customerPhoneNumber?: string | null,
        customerEmail?: string | null,
        addressID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBoxSubscriptionVariables = {
  filter?: ModelSubscriptionBoxFilterInput | null,
};

export type OnCreateBoxSubscription = {
  onCreateBox?:  {
    __typename: "Box",
    id: string,
    sticker: string,
    boxStatus: BOX_STATUS,
    qrCode: string,
    customerComment?: string | null,
    weekDay: WEEK_DAY,
    wporderID: string,
    WPOrder?:  {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBoxSubscriptionVariables = {
  filter?: ModelSubscriptionBoxFilterInput | null,
};

export type OnUpdateBoxSubscription = {
  onUpdateBox?:  {
    __typename: "Box",
    id: string,
    sticker: string,
    boxStatus: BOX_STATUS,
    qrCode: string,
    customerComment?: string | null,
    weekDay: WEEK_DAY,
    wporderID: string,
    WPOrder?:  {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBoxSubscriptionVariables = {
  filter?: ModelSubscriptionBoxFilterInput | null,
};

export type OnDeleteBoxSubscription = {
  onDeleteBox?:  {
    __typename: "Box",
    id: string,
    sticker: string,
    boxStatus: BOX_STATUS,
    qrCode: string,
    customerComment?: string | null,
    weekDay: WEEK_DAY,
    wporderID: string,
    WPOrder?:  {
      __typename: "WPOrder",
      id: string,
      WPOrderNumber: string,
      WPOrderStatus: string,
      WPDishes?:  Array< {
        __typename: "WPDish",
        name: string,
        dishType: string,
        quantity: number,
        weekDay: WEEK_DAY,
      } > | null,
      finalPrice: number,
      customerComment?: string | null,
      createdAtWp: number,
      boxes?:  {
        __typename: "ModelBoxConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      driverName?: string | null,
      companyName?: string | null,
      customerName: string,
      customerAddress: string,
      customerPhoneNumber?: string | null,
      customerEmail?: string | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      customerID: string,
      customer?:  {
        __typename: "Customer",
        id: string,
        wpId?: number | null,
        company?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        phoneNumber?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnCreateDishSubscription = {
  onCreateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    components?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnUpdateDishSubscription = {
  onUpdateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    components?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnDeleteDishSubscription = {
  onDeleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    components?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateComponentSubscriptionVariables = {
  filter?: ModelSubscriptionComponentFilterInput | null,
};

export type OnCreateComponentSubscription = {
  onCreateComponent?:  {
    __typename: "Component",
    id: string,
    name: string,
    type: COMPONENT_TYPE,
    packageType: PACKAGE_TYPE,
    calories: number,
    carbons: number,
    fats: number,
    proteins: number,
    recipe: string,
    price: number,
    picture: string,
    weightInGram: number,
    dishes?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    products?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateComponentSubscriptionVariables = {
  filter?: ModelSubscriptionComponentFilterInput | null,
};

export type OnUpdateComponentSubscription = {
  onUpdateComponent?:  {
    __typename: "Component",
    id: string,
    name: string,
    type: COMPONENT_TYPE,
    packageType: PACKAGE_TYPE,
    calories: number,
    carbons: number,
    fats: number,
    proteins: number,
    recipe: string,
    price: number,
    picture: string,
    weightInGram: number,
    dishes?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    products?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteComponentSubscriptionVariables = {
  filter?: ModelSubscriptionComponentFilterInput | null,
};

export type OnDeleteComponentSubscription = {
  onDeleteComponent?:  {
    __typename: "Component",
    id: string,
    name: string,
    type: COMPONENT_TYPE,
    packageType: PACKAGE_TYPE,
    calories: number,
    carbons: number,
    fats: number,
    proteins: number,
    recipe: string,
    price: number,
    picture: string,
    weightInGram: number,
    dishes?:  {
      __typename: "ModelDishComponentConnection",
      items:  Array< {
        __typename: "DishComponent",
        id: string,
        dishId: string,
        componentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    products?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductAtWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionProductAtWarehouseFilterInput | null,
};

export type OnCreateProductAtWarehouseSubscription = {
  onCreateProductAtWarehouse?:  {
    __typename: "ProductAtWarehouse",
    id: string,
    quantity: number,
    maxQuantity: number,
    minQuantity: number,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    },
    qrCode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productAtWarehouseProductId: string,
    productAtWarehouseWarehouseId: string,
  } | null,
};

export type OnUpdateProductAtWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionProductAtWarehouseFilterInput | null,
};

export type OnUpdateProductAtWarehouseSubscription = {
  onUpdateProductAtWarehouse?:  {
    __typename: "ProductAtWarehouse",
    id: string,
    quantity: number,
    maxQuantity: number,
    minQuantity: number,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    },
    qrCode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productAtWarehouseProductId: string,
    productAtWarehouseWarehouseId: string,
  } | null,
};

export type OnDeleteProductAtWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionProductAtWarehouseFilterInput | null,
};

export type OnDeleteProductAtWarehouseSubscription = {
  onDeleteProductAtWarehouse?:  {
    __typename: "ProductAtWarehouse",
    id: string,
    quantity: number,
    maxQuantity: number,
    minQuantity: number,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      warehouseAddressId: string,
    },
    qrCode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productAtWarehouseProductId: string,
    productAtWarehouseWarehouseId: string,
  } | null,
};

export type OnCreateProductFromSupplierSubscriptionVariables = {
  filter?: ModelSubscriptionProductFromSupplierFilterInput | null,
};

export type OnCreateProductFromSupplierSubscription = {
  onCreateProductFromSupplier?:  {
    __typename: "ProductFromSupplier",
    id: string,
    price: number,
    quality?: number | null,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    supplier:  {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productFromSupplierProductId: string,
    productFromSupplierSupplierId: string,
  } | null,
};

export type OnUpdateProductFromSupplierSubscriptionVariables = {
  filter?: ModelSubscriptionProductFromSupplierFilterInput | null,
};

export type OnUpdateProductFromSupplierSubscription = {
  onUpdateProductFromSupplier?:  {
    __typename: "ProductFromSupplier",
    id: string,
    price: number,
    quality?: number | null,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    supplier:  {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productFromSupplierProductId: string,
    productFromSupplierSupplierId: string,
  } | null,
};

export type OnDeleteProductFromSupplierSubscriptionVariables = {
  filter?: ModelSubscriptionProductFromSupplierFilterInput | null,
};

export type OnDeleteProductFromSupplierSubscription = {
  onDeleteProductFromSupplier?:  {
    __typename: "ProductFromSupplier",
    id: string,
    price: number,
    quality?: number | null,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    supplier:  {
      __typename: "Supplier",
      id: string,
      name: string,
      phoneNumber?: string | null,
      email?: string | null,
      address:  {
        __typename: "Address",
        id: string,
        address1: string,
        address2: string,
        city: string,
        postCode: string,
        coordinateID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      supplierAddressId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productFromSupplierProductId: string,
    productFromSupplierSupplierId: string,
  } | null,
};

export type OnCreateSupplierSubscriptionVariables = {
  filter?: ModelSubscriptionSupplierFilterInput | null,
};

export type OnCreateSupplierSubscription = {
  onCreateSupplier?:  {
    __typename: "Supplier",
    id: string,
    name: string,
    phoneNumber?: string | null,
    email?: string | null,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    supplierAddressId: string,
  } | null,
};

export type OnUpdateSupplierSubscriptionVariables = {
  filter?: ModelSubscriptionSupplierFilterInput | null,
};

export type OnUpdateSupplierSubscription = {
  onUpdateSupplier?:  {
    __typename: "Supplier",
    id: string,
    name: string,
    phoneNumber?: string | null,
    email?: string | null,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    supplierAddressId: string,
  } | null,
};

export type OnDeleteSupplierSubscriptionVariables = {
  filter?: ModelSubscriptionSupplierFilterInput | null,
};

export type OnDeleteSupplierSubscription = {
  onDeleteSupplier?:  {
    __typename: "Supplier",
    id: string,
    name: string,
    phoneNumber?: string | null,
    email?: string | null,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    supplierAddressId: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    measurement: string,
    productType:  {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    typeID?: string | null,
    components?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    measurement: string,
    productType:  {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    typeID?: string | null,
    components?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    measurement: string,
    productType:  {
      __typename: "Type",
      id: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      categoryID: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    typeID?: string | null,
    components?:  {
      __typename: "ModelComponentProductsConnection",
      items:  Array< {
        __typename: "ComponentProducts",
        id: string,
        componentId: string,
        productId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTypeSubscriptionVariables = {
  filter?: ModelSubscriptionTypeFilterInput | null,
};

export type OnCreateTypeSubscription = {
  onCreateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categoryID: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTypeSubscriptionVariables = {
  filter?: ModelSubscriptionTypeFilterInput | null,
};

export type OnUpdateTypeSubscription = {
  onUpdateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categoryID: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTypeSubscriptionVariables = {
  filter?: ModelSubscriptionTypeFilterInput | null,
};

export type OnDeleteTypeSubscription = {
  onDeleteType?:  {
    __typename: "Type",
    id: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      department:  {
        __typename: "Department",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      departmentID: string,
      types?:  {
        __typename: "ModelTypeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categoryID: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        measurement: string,
        typeID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    departmentID: string,
    types?:  {
      __typename: "ModelTypeConnection",
      items:  Array< {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    departmentID: string,
    types?:  {
      __typename: "ModelTypeConnection",
      items:  Array< {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    department:  {
      __typename: "Department",
      id: string,
      name: string,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    departmentID: string,
    types?:  {
      __typename: "ModelTypeConnection",
      items:  Array< {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        departmentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
};

export type OnCreateWarehouseSubscription = {
  onCreateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    warehouseAddressId: string,
  } | null,
};

export type OnUpdateWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
};

export type OnUpdateWarehouseSubscription = {
  onUpdateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    warehouseAddressId: string,
  } | null,
};

export type OnDeleteWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
};

export type OnDeleteWarehouseSubscription = {
  onDeleteWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    address:  {
      __typename: "Address",
      id: string,
      address1: string,
      address2: string,
      city: string,
      postCode: string,
      WPOrders?:  {
        __typename: "ModelWPOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coordinateID?: string | null,
      coordinate?:  {
        __typename: "Coordinate",
        id: string,
        latitude: number,
        longitude: number,
        name: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    warehouseAddressId: string,
  } | null,
};

export type OnCreateDishComponentSubscriptionVariables = {
  filter?: ModelSubscriptionDishComponentFilterInput | null,
};

export type OnCreateDishComponentSubscription = {
  onCreateDishComponent?:  {
    __typename: "DishComponent",
    id: string,
    dishId: string,
    componentId: string,
    dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDishComponentSubscriptionVariables = {
  filter?: ModelSubscriptionDishComponentFilterInput | null,
};

export type OnUpdateDishComponentSubscription = {
  onUpdateDishComponent?:  {
    __typename: "DishComponent",
    id: string,
    dishId: string,
    componentId: string,
    dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDishComponentSubscriptionVariables = {
  filter?: ModelSubscriptionDishComponentFilterInput | null,
};

export type OnDeleteDishComponentSubscription = {
  onDeleteDishComponent?:  {
    __typename: "DishComponent",
    id: string,
    dishId: string,
    componentId: string,
    dish:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      components?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateComponentProductsSubscriptionVariables = {
  filter?: ModelSubscriptionComponentProductsFilterInput | null,
};

export type OnCreateComponentProductsSubscription = {
  onCreateComponentProducts?:  {
    __typename: "ComponentProducts",
    id: string,
    componentId: string,
    productId: string,
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateComponentProductsSubscriptionVariables = {
  filter?: ModelSubscriptionComponentProductsFilterInput | null,
};

export type OnUpdateComponentProductsSubscription = {
  onUpdateComponentProducts?:  {
    __typename: "ComponentProducts",
    id: string,
    componentId: string,
    productId: string,
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteComponentProductsSubscriptionVariables = {
  filter?: ModelSubscriptionComponentProductsFilterInput | null,
};

export type OnDeleteComponentProductsSubscription = {
  onDeleteComponentProducts?:  {
    __typename: "ComponentProducts",
    id: string,
    componentId: string,
    productId: string,
    component:  {
      __typename: "Component",
      id: string,
      name: string,
      type: COMPONENT_TYPE,
      packageType: PACKAGE_TYPE,
      calories: number,
      carbons: number,
      fats: number,
      proteins: number,
      recipe: string,
      price: number,
      picture: string,
      weightInGram: number,
      dishes?:  {
        __typename: "ModelDishComponentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      products?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      measurement: string,
      productType:  {
        __typename: "Type",
        id: string,
        name: string,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      typeID?: string | null,
      components?:  {
        __typename: "ModelComponentProductsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
