import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

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

export enum OrderStatus {
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
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

export declare class User {
  readonly id: string;
  readonly sub: string;
  readonly email: string;
  readonly role: Role | keyof typeof Role;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly avatar?: string;
  readonly coordinates?: (Coordinates)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Coordinates {
  readonly id: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly assignedDriverUser?: User;
  readonly name?: string;
  readonly addresses?: (Address)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Coordinates>);
  static copyOf(source: Coordinates, mutator: (draft: MutableModel<Coordinates>) => MutableModel<Coordinates> | void): Coordinates;
}

export declare class Address {
  readonly id: string;
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly postCode: string;
  readonly addressCoordinates?: Coordinates;
  readonly orders?: (Order)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Address>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

export declare class Order {
  readonly id: string;
  readonly orderNumber?: string;
  readonly orderStatus: OrderStatus | keyof typeof OrderStatus;
  readonly customer: Customer;
  readonly dishes?: (Dish)[];
  readonly address: Address;
  readonly finalPrice: number;
  readonly customerComment?: string;
  readonly boxes?: (Box)[];
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
  readonly orders?: (Order)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

export declare class Box {
  readonly id: string;
  readonly order: Order;
  readonly sticker: string;
  readonly boxStatus: BoxStatus | keyof typeof BoxStatus;
  readonly qrCode: string;
  readonly customerComment?: string;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Box>);
  static copyOf(source: Box, mutator: (draft: MutableModel<Box>) => MutableModel<Box> | void): Box;
}
