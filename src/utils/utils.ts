import {Address, Customer} from "../models";
import moment from "moment";

export const stringifyAddress = (address?: Address | null) => {
  return `${address?.postCode}, ${address?.city}, ${address?.address1}, ${address?.address2}`
}

export const fullName = (customer?: Customer) => {
  return `${customer?.firstName} ${customer?.lastName}`
}

export const today = moment().format('dddd');

export const googleMapLink = (latitude: number, longitude: number) => `https://www.google.com/maps/place/${latitude},${longitude}`;

export const MAX_QUANTITY = 1000000;
export const IMAGE_URL_PREFIX = 'https://images173858-main.s3.amazonaws.com/public/'
