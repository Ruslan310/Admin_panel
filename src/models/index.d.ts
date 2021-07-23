import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
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

export declare class Dish {
  readonly name: string;
  readonly dishType: string;
  readonly quantity: number;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
  constructor(init: ModelInit<Dish>);
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
  constructor(init: ModelInit<Coordinate>);
  static copyOf(source: Coordinate, mutator: (draft: MutableModel<Coordinate>) => MutableModel<Coordinate> | void): Coordinate;
}

export declare class Address {
  readonly id: string;
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly postCode: string;
  readonly coordinateID?: string;
  readonly addressOrders?: Order[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Address>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

export declare class Order {
  readonly id: string;
  readonly orderNumber?: string;
  readonly orderStatus: OrderStatus | keyof typeof OrderStatus;
  readonly dishes?: Dish[];
  readonly finalPrice: number;
  readonly customerComment?: string;
  readonly customerID?: string;
  readonly customer?: Customer;
  readonly orderBoxes?: Box[];
  readonly addressID?: string;
  readonly address?: Address;
  readonly createdAtWp: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class Customer {
  readonly id: string;
  readonly wpId?: number;
  readonly company?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email: string;
  readonly phoneNumber?: string;
  readonly customerOrders?: Order[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

export declare class Box {
  readonly id: string;
  readonly sticker: string;
  readonly boxStatus: BoxStatus | keyof typeof BoxStatus;
  readonly qrCode: string;
  readonly customerComment?: string;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
  readonly orderID?: string;
  readonly order?: Order;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Box>);
  static copyOf(source: Box, mutator: (draft: MutableModel<Box>) => MutableModel<Box> | void): Box;
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
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}