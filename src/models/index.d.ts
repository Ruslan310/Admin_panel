import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

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

type EagerWPDish = {
  readonly name: string;
  readonly dishType: string;
  readonly quantity: number;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
}

type LazyWPDish = {
  readonly name: string;
  readonly dishType: string;
  readonly quantity: number;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
}

export declare type WPDish = LazyLoading extends LazyLoadingDisabled ? EagerWPDish : LazyWPDish

export declare const WPDish: (new (init: ModelInit<WPDish>) => WPDish)

type EagerWPOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WPOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly WPOrderNumber: string;
  readonly WPOrderStatus: string;
  readonly WPDishes?: WPDish[] | null;
  readonly finalPrice: number;
  readonly customerComment?: string | null;
  readonly createdAtWp: number;
  readonly boxes?: (Box | null)[] | null;
  readonly driverName?: string | null;
  readonly companyName?: string | null;
  readonly customerName: string;
  readonly customerAddress: string;
  readonly customerPhoneNumber?: string | null;
  readonly customerEmail?: string | null;
  readonly addressID: string;
  readonly address?: Address | null;
  readonly customerID: string;
  readonly customer?: Customer | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWPOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WPOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly WPOrderNumber: string;
  readonly WPOrderStatus: string;
  readonly WPDishes?: WPDish[] | null;
  readonly finalPrice: number;
  readonly customerComment?: string | null;
  readonly createdAtWp: number;
  readonly boxes: AsyncCollection<Box>;
  readonly driverName?: string | null;
  readonly companyName?: string | null;
  readonly customerName: string;
  readonly customerAddress: string;
  readonly customerPhoneNumber?: string | null;
  readonly customerEmail?: string | null;
  readonly addressID: string;
  readonly address: AsyncItem<Address | undefined>;
  readonly customerID: string;
  readonly customer: AsyncItem<Customer | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WPOrder = LazyLoading extends LazyLoadingDisabled ? EagerWPOrder : LazyWPOrder

export declare const WPOrder: (new (init: ModelInit<WPOrder>) => WPOrder) & {
  copyOf(source: WPOrder, mutator: (draft: MutableModel<WPOrder>) => MutableModel<WPOrder> | void): WPOrder;
}

type EagerBox = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Box, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sticker: string;
  readonly boxStatus: BoxStatus | keyof typeof BoxStatus;
  readonly qrCode: string;
  readonly customerComment?: string | null;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
  readonly wporderID: string;
  readonly WPOrder?: WPOrder | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBox = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Box, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sticker: string;
  readonly boxStatus: BoxStatus | keyof typeof BoxStatus;
  readonly qrCode: string;
  readonly customerComment?: string | null;
  readonly weekDay: WeekDay | keyof typeof WeekDay;
  readonly wporderID: string;
  readonly WPOrder: AsyncItem<WPOrder | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Box = LazyLoading extends LazyLoadingDisabled ? EagerBox : LazyBox

export declare const Box: (new (init: ModelInit<Box>) => Box) & {
  copyOf(source: Box, mutator: (draft: MutableModel<Box>) => MutableModel<Box> | void): Box;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly postCode: string;
  readonly WPOrders?: (WPOrder | null)[] | null;
  readonly coordinateID?: string | null;
  readonly coordinate?: Coordinate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address1: string;
  readonly address2: string;
  readonly city: string;
  readonly postCode: string;
  readonly WPOrders: AsyncCollection<WPOrder>;
  readonly coordinateID?: string | null;
  readonly coordinate: AsyncItem<Coordinate | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

type EagerCoordinate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coordinate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly name: string;
  readonly userID?: string | null;
  readonly driver?: User | null;
  readonly addresses?: (Address | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoordinate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coordinate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly name: string;
  readonly userID?: string | null;
  readonly driver: AsyncItem<User | undefined>;
  readonly addresses: AsyncCollection<Address>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coordinate = LazyLoading extends LazyLoadingDisabled ? EagerCoordinate : LazyCoordinate

export declare const Coordinate: (new (init: ModelInit<Coordinate>) => Coordinate) & {
  copyOf(source: Coordinate, mutator: (draft: MutableModel<Coordinate>) => MutableModel<Coordinate> | void): Coordinate;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly email: string;
  readonly role: Role | keyof typeof Role;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly avatar?: string | null;
  readonly coordinates?: (Coordinate | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly email: string;
  readonly role: Role | keyof typeof Role;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly avatar?: string | null;
  readonly coordinates: AsyncCollection<Coordinate>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wpId?: number | null;
  readonly company?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly WPOrders?: (WPOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wpId?: number | null;
  readonly company?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly WPOrders: AsyncCollection<WPOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}