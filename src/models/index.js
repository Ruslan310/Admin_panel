// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ComponentType = {
  "MAIN": "MAIN",
  "SIDE": "SIDE",
  "SOUP": "SOUP",
  "SALAD": "SALAD",
  "DESSERT": "DESSERT"
};

const PackageType = {
  "HOT": "HOT",
  "COLD": "COLD",
  "DESSERT": "DESSERT",
  "SOUP": "SOUP"
};

const WporderStatus = {
  "PROCESSING": "PROCESSING",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED"
};

const WeekDay = {
  "MONDAY": "MONDAY",
  "TUESDAY": "TUESDAY",
  "WEDNESDAY": "WEDNESDAY",
  "THURSDAY": "THURSDAY",
  "FRIDAY": "FRIDAY",
  "SATURDAY": "SATURDAY",
  "SUNDAY": "SUNDAY",
  "WITHOUT_DAY": "WITHOUT_DAY"
};

const BoxStatus = {
  "PRINTED": "PRINTED",
  "COOKED": "COOKED",
  "IN_DELIVERY": "IN_DELIVERY",
  "DELIVERED": "DELIVERED",
  "CANCELLED": "CANCELLED",
  "NEW": "NEW"
};

const Role = {
  "DELIVERY": "DELIVERY",
  "KITCHEN": "KITCHEN",
  "ADMIN": "ADMIN",
  "GUEST": "GUEST"
};

const { DishComponent, Dish, Component, ComponentProduct, Product, Type, Category, Department, ProductAtWarehouse, Warehouse, Address, WPOrder, Customer, Box, ProductFromSupplier, Supplier, Coordinate, User, WPDish } = initSchema(schema);

export {
  DishComponent,
  Dish,
  Component,
  ComponentProduct,
  Product,
  Type,
  Category,
  Department,
  ProductAtWarehouse,
  Warehouse,
  Address,
  WPOrder,
  Customer,
  Box,
  ProductFromSupplier,
  Supplier,
  Coordinate,
  User,
  ComponentType,
  PackageType,
  WporderStatus,
  WeekDay,
  BoxStatus,
  Role,
  WPDish
};