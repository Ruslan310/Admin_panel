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

export enum PackageType {
  HOT = "HOT",
  COLD = "COLD",
  DESSERT = "DESSERT",
  SOUP = "SOUP"
}

export enum ComponentType {
  MAIN = "MAIN",
  SIDE = "SIDE",
  SOUP = "SOUP",
  SALAD = "SALAD",
  DESSERT = "DESSERT"
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

type EagerDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly components?: (DishComponent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly components: AsyncCollection<DishComponent>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dish = LazyLoading extends LazyLoadingDisabled ? EagerDish : LazyDish

export declare const Dish: (new (init: ModelInit<Dish>) => Dish) & {
  copyOf(source: Dish, mutator: (draft: MutableModel<Dish>) => MutableModel<Dish> | void): Dish;
}

type EagerComponent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Component, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly dishes?: (DishComponent | null)[] | null;
  readonly products?: (ComponentProducts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComponent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Component, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly dishes: AsyncCollection<DishComponent>;
  readonly products: AsyncCollection<ComponentProducts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Component = LazyLoading extends LazyLoadingDisabled ? EagerComponent : LazyComponent

export declare const Component: (new (init: ModelInit<Component>) => Component) & {
  copyOf(source: Component, mutator: (draft: MutableModel<Component>) => MutableModel<Component> | void): Component;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly measurement: string;
  readonly productType: Type;
  readonly typeID?: string | null;
  readonly components?: (ComponentProducts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly measurement: string;
  readonly productType: AsyncItem<Type>;
  readonly typeID?: string | null;
  readonly components: AsyncCollection<ComponentProducts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Type, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category: Category;
  readonly categoryID: string;
  readonly products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Type, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category: AsyncItem<Category>;
  readonly categoryID: string;
  readonly products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Type = LazyLoading extends LazyLoadingDisabled ? EagerType : LazyType

export declare const Type: (new (init: ModelInit<Type>) => Type) & {
  copyOf(source: Type, mutator: (draft: MutableModel<Type>) => MutableModel<Type> | void): Type;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly department: Department;
  readonly departmentID: string;
  readonly types?: (Type | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly department: AsyncItem<Department>;
  readonly departmentID: string;
  readonly types: AsyncCollection<Type>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly categories?: (Category | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Department, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly categories: AsyncCollection<Category>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Department = LazyLoading extends LazyLoadingDisabled ? EagerDepartment : LazyDepartment

export declare const Department: (new (init: ModelInit<Department>) => Department) & {
  copyOf(source: Department, mutator: (draft: MutableModel<Department>) => MutableModel<Department> | void): Department;
}

type EagerProductAtWarehouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductAtWarehouse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly maxQuantity: number;
  readonly minQuantity: number;
  readonly product: Product;
  readonly warehouse: Warehouse;
  readonly qrCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productAtWarehouseProductId: string;
  readonly productAtWarehouseWarehouseId: string;
}

type LazyProductAtWarehouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductAtWarehouse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly maxQuantity: number;
  readonly minQuantity: number;
  readonly product: AsyncItem<Product>;
  readonly warehouse: AsyncItem<Warehouse>;
  readonly qrCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productAtWarehouseProductId: string;
  readonly productAtWarehouseWarehouseId: string;
}

export declare type ProductAtWarehouse = LazyLoading extends LazyLoadingDisabled ? EagerProductAtWarehouse : LazyProductAtWarehouse

export declare const ProductAtWarehouse: (new (init: ModelInit<ProductAtWarehouse>) => ProductAtWarehouse) & {
  copyOf(source: ProductAtWarehouse, mutator: (draft: MutableModel<ProductAtWarehouse>) => MutableModel<ProductAtWarehouse> | void): ProductAtWarehouse;
}

type EagerWarehouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Warehouse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: Address;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly warehouseAddressId: string;
}

type LazyWarehouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Warehouse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: AsyncItem<Address>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly warehouseAddressId: string;
}

export declare type Warehouse = LazyLoading extends LazyLoadingDisabled ? EagerWarehouse : LazyWarehouse

export declare const Warehouse: (new (init: ModelInit<Warehouse>) => Warehouse) & {
  copyOf(source: Warehouse, mutator: (draft: MutableModel<Warehouse>) => MutableModel<Warehouse> | void): Warehouse;
}

type EagerProductFromSupplier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductFromSupplier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price: number;
  readonly quality?: number | null;
  readonly product: Product;
  readonly supplier: Supplier;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productFromSupplierProductId: string;
  readonly productFromSupplierSupplierId: string;
}

type LazyProductFromSupplier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductFromSupplier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price: number;
  readonly quality?: number | null;
  readonly product: AsyncItem<Product>;
  readonly supplier: AsyncItem<Supplier>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productFromSupplierProductId: string;
  readonly productFromSupplierSupplierId: string;
}

export declare type ProductFromSupplier = LazyLoading extends LazyLoadingDisabled ? EagerProductFromSupplier : LazyProductFromSupplier

export declare const ProductFromSupplier: (new (init: ModelInit<ProductFromSupplier>) => ProductFromSupplier) & {
  copyOf(source: ProductFromSupplier, mutator: (draft: MutableModel<ProductFromSupplier>) => MutableModel<ProductFromSupplier> | void): ProductFromSupplier;
}

type EagerSupplier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Supplier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly address: Address;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly supplierAddressId: string;
}

type LazySupplier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Supplier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly address: AsyncItem<Address>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly supplierAddressId: string;
}

export declare type Supplier = LazyLoading extends LazyLoadingDisabled ? EagerSupplier : LazySupplier

export declare const Supplier: (new (init: ModelInit<Supplier>) => Supplier) & {
  copyOf(source: Supplier, mutator: (draft: MutableModel<Supplier>) => MutableModel<Supplier> | void): Supplier;
}

type EagerDishComponent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DishComponent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dishId?: string | null;
  readonly componentId?: string | null;
  readonly dish: Dish;
  readonly component: Component;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDishComponent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DishComponent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dishId?: string | null;
  readonly componentId?: string | null;
  readonly dish: AsyncItem<Dish>;
  readonly component: AsyncItem<Component>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DishComponent = LazyLoading extends LazyLoadingDisabled ? EagerDishComponent : LazyDishComponent

export declare const DishComponent: (new (init: ModelInit<DishComponent>) => DishComponent) & {
  copyOf(source: DishComponent, mutator: (draft: MutableModel<DishComponent>) => MutableModel<DishComponent> | void): DishComponent;
}

type EagerComponentProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ComponentProducts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly componentId?: string | null;
  readonly productId?: string | null;
  readonly component: Component;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComponentProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ComponentProducts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly componentId?: string | null;
  readonly productId?: string | null;
  readonly component: AsyncItem<Component>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ComponentProducts = LazyLoading extends LazyLoadingDisabled ? EagerComponentProducts : LazyComponentProducts

export declare const ComponentProducts: (new (init: ModelInit<ComponentProducts>) => ComponentProducts) & {
  copyOf(source: ComponentProducts, mutator: (draft: MutableModel<ComponentProducts>) => MutableModel<ComponentProducts> | void): ComponentProducts;
}