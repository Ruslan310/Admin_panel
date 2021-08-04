// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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
  "CANCELLED": "CANCELLED"
};

const Role = {
  "DELIVERY": "DELIVERY",
  "KITCHEN": "KITCHEN",
  "ADMIN": "ADMIN",
  "GUEST": "GUEST"
};

const { Coordinate, Address, WPOrder, Customer, Box, User, WPDish } = initSchema(schema);

export {
  Coordinate,
  Address,
  WPOrder,
  Customer,
  Box,
  User,
  WporderStatus,
  WeekDay,
  BoxStatus,
  Role,
  WPDish
};