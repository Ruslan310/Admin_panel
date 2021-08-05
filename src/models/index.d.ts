import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

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

type CoordinateMetaData = {
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

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

export declare class Address {
  readonly id: string;
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly postCode: string;
  readonly coordinateID?: string;
  readonly addressWPOrders?: WPOrder[];
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
  readonly WPOrderBoxes?: Box[];
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
  readonly customerWPOrders?: WPOrder[];
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

export declare class User {
  readonly id: string;
  readonly sub: string;
  readonly email: string;
  readonly role: Role | keyof typeof Role;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly avatar?: string;
  readonly assignedDriverCoordinates?: Coordinate[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}