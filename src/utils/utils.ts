import {Address, Customer} from "../models";
import moment from "moment";

export const stringifyAddress = (address?: Address | null) => {
  return `${address?.postCode}, ${address?.city}, ${address?.address1}, ${address?.address2}`
}

export const fullName = (customer?: Customer) => {
  return `${customer?.firstName} ${customer?.lastName}`
}

export const today = moment().format('dddd');
