import {Address} from "../models";

export const stringifyAddress = (address?: Address | null) => {
  return `${address?.postCode}, ${address?.city}, ${address?.address1}, ${address?.address2}`
}
