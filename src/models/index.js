// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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
  "NEW": "NEW",
  "PRINTED": "PRINTED",
  "COOKED": "COOKED",
  "IN_DELIVERY": "IN_DELIVERY",
  "DELIVERED": "DELIVERED",
  "CANCELLED": "CANCELLED"
};

const Role = {
  "DELIVERY": "DELIVERY",
  "KITCHEN": "KITCHEN",
  "ADMIN": "ADMIN",
  "GUEST": "GUEST"
};

const PackageType = {
  "HOT": "HOT",
  "COLD": "COLD",
  "DESSERT": "DESSERT",
  "SOUP": "SOUP"
};

const ComponentType = {
  "MAIN": "MAIN",
  "SIDE": "SIDE",
  "SOUP": "SOUP",
  "SALAD": "SALAD",
  "DESSERT": "DESSERT"
};

const { WPOrder, Address, Coordinate, User, Company, Customer, Box, Dish, Component, ProductAtWarehouse, ProductFromSupplier, Supplier, Product, Type, Category, Department, Warehouse, DishComponent, ComponentProducts, WPDish } = initSchema(schema);

export {
  WPOrder,
  Address,
  Coordinate,
  User,
  Company,
  Customer,
  Box,
  Dish,
  Component,
  ProductAtWarehouse,
  ProductFromSupplier,
  Supplier,
  Product,
  Type,
  Category,
  Department,
  Warehouse,
  DishComponent,
  ComponentProducts,
  WeekDay,
  BoxStatus,
  Role,
  PackageType,
  ComponentType,
  WPDish
};