import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ComponentType {
  MAIN = "MAIN",
  SIDE = "SIDE",
  SOUP = "SOUP",
  SALAD = "SALAD",
  DESSERT = "DESSERT"
}

export enum PackageType {
  HOT = "HOT",
  COLD = "COLD",
  DESSERT = "DESSERT",
  SOUP = "SOUP"
}

export enum WporderStatus {
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

export enum WeekDay {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  WITHOUT_DAY = "WITHOUT_DAY"
}

export enum BoxStatus {
  NEW = "NEW",
  PRINTED = "PRINTED",
  COOKED = "COOKED",
  IN_DELIVERY = "IN_DELIVERY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED"
}

export enum Role {
  DELIVERY = "DELIVERY",
  KITCHEN = "KITCHEN",
  ADMIN = "ADMIN",
  GUEST = "GUEST"
}

export declare class WPDish {
  readonly name: string;
  readonly dishType: string;
  readonly quantity: number;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
  constructor(init: ModelInit<WPDish>);
}

type DishComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DepartmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductAtWarehouseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WarehouseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WPOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoxMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductFromSupplierMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SupplierMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoordinateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DishComponent {
  readonly id: string;
  readonly dish: Dish;
  readonly component: Component;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DishComponent, DishComponentMetaData>);
  static copyOf(source: DishComponent, mutator: (draft: MutableModel<DishComponent, DishComponentMetaData>) => MutableModel<DishComponent, DishComponentMetaData> | void): DishComponent;
}

export declare class Dish {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Dish, DishMetaData>);
  static copyOf(source: Dish, mutator: (draft: MutableModel<Dish, DishMetaData>) => MutableModel<Dish, DishMetaData> | void): Dish;
}

export declare class Component {
  readonly id: string;
  readonly name: string;
  readonly type: ComponentType | keyof typeof ComponentType;
  readonly packageType: PackageType | keyof typeof PackageType;
  readonly calories: number;
  readonly carbons: number;
  readonly fats: number;
  readonly proteins: number;
  readonly recipe: string;
  readonly price: number;
  readonly picture: string;
  readonly weightInGram: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Component, ComponentMetaData>);
  static copyOf(source: Component, mutator: (draft: MutableModel<Component, ComponentMetaData>) => MutableModel<Component, ComponentMetaData> | void): Component;
}

export declare class ComponentProduct {
  readonly id: string;
  readonly component: Component;
  readonly product: Product;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ComponentProduct, ComponentProductMetaData>);
  static copyOf(source: ComponentProduct, mutator: (draft: MutableModel<ComponentProduct, ComponentProductMetaData>) => MutableModel<ComponentProduct, ComponentProductMetaData> | void): ComponentProduct;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly measurement: string;
  readonly type: Type;
  readonly typeID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Type {
  readonly id: string;
  readonly name: string;
  readonly category: Category;
  readonly categoryID?: string;
  readonly products?: (Product | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Type, TypeMetaData>);
  static copyOf(source: Type, mutator: (draft: MutableModel<Type, TypeMetaData>) => MutableModel<Type, TypeMetaData> | void): Type;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly department: Department;
  readonly departmentID?: string;
  readonly types?: (Type | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Department {
  readonly id: string;
  readonly name: string;
  readonly categories?: (Category | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Department, DepartmentMetaData>);
  static copyOf(source: Department, mutator: (draft: MutableModel<Department, DepartmentMetaData>) => MutableModel<Department, DepartmentMetaData> | void): Department;
}

export declare class ProductAtWarehouse {
  readonly id: string;
  readonly quantity: number;
  readonly maxQuantity: number;
  readonly minQuantity: number;
  readonly product: Product;
  readonly warehouse: Warehouse;
  readonly qrCode?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProductAtWarehouse, ProductAtWarehouseMetaData>);
  static copyOf(source: ProductAtWarehouse, mutator: (draft: MutableModel<ProductAtWarehouse, ProductAtWarehouseMetaData>) => MutableModel<ProductAtWarehouse, ProductAtWarehouseMetaData> | void): ProductAtWarehouse;
}

export declare class Warehouse {
  readonly id: string;
  readonly name: string;
  readonly address: Address;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Warehouse, WarehouseMetaData>);
  static copyOf(source: Warehouse, mutator: (draft: MutableModel<Warehouse, WarehouseMetaData>) => MutableModel<Warehouse, WarehouseMetaData> | void): Warehouse;
}

export declare class Address {
  readonly id: string;
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly postCode: string;
  readonly coordinateID?: string;
  readonly addressWPOrders?: (WPOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class WPOrder {
  readonly id: string;
  readonly WPOrderNumber?: string;
  readonly WPOrderStatus: WporderStatus | keyof typeof WporderStatus;
  readonly WPDishes?: WPDish[];
  readonly finalPrice: number;
  readonly customerComment?: string;
  readonly customerID?: string;
  readonly customer?: Customer;
  readonly WPOrderBoxes?: (Box | null)[];
  readonly addressID?: string;
  readonly address?: Address;
  readonly createdAtWp: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WPOrder, WPOrderMetaData>);
  static copyOf(source: WPOrder, mutator: (draft: MutableModel<WPOrder, WPOrderMetaData>) => MutableModel<WPOrder, WPOrderMetaData> | void): WPOrder;
}

export declare class Customer {
  readonly id: string;
  readonly wpId?: number;
  readonly company?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email: string;
  readonly phoneNumber?: string;
  readonly customerWPOrders?: (WPOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Box {
  readonly id: string;
  readonly sticker: string;
  readonly boxStatus: BoxStatus | keyof typeof BoxStatus;
  readonly qrCode: string;
  readonly customerComment?: string;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
  readonly WPOrderID?: string;
  readonly WPOrder?: WPOrder;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Box, BoxMetaData>);
  static copyOf(source: Box, mutator: (draft: MutableModel<Box, BoxMetaData>) => MutableModel<Box, BoxMetaData> | void): Box;
}

export declare class ProductFromSupplier {
  readonly id: string;
  readonly price: number;
  readonly quality?: number;
  readonly product: Product;
  readonly supplier: Supplier;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProductFromSupplier, ProductFromSupplierMetaData>);
  static copyOf(source: ProductFromSupplier, mutator: (draft: MutableModel<ProductFromSupplier, ProductFromSupplierMetaData>) => MutableModel<ProductFromSupplier, ProductFromSupplierMetaData> | void): ProductFromSupplier;
}

export declare class Supplier {
  readonly id: string;
  readonly name: string;
  readonly phoneNumber?: string;
  readonly email?: string;
  readonly address: Address;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Supplier, SupplierMetaData>);
  static copyOf(source: Supplier, mutator: (draft: MutableModel<Supplier, SupplierMetaData>) => MutableModel<Supplier, SupplierMetaData> | void): Supplier;
}

export declare class Coordinate {
  readonly id: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly name: string;
  readonly userID?: string;
  readonly coordinateAddresses?: (Address | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Coordinate, CoordinateMetaData>);
  static copyOf(source: Coordinate, mutator: (draft: MutableModel<Coordinate, CoordinateMetaData>) => MutableModel<Coordinate, CoordinateMetaData> | void): Coordinate;
}

export declare class User {
  readonly id: string;
  readonly sub: string;
  readonly email: string;
  readonly role: Role | keyof typeof Role;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly avatar?: string;
  readonly assignedDriverCoordinates?: (Coordinate | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}