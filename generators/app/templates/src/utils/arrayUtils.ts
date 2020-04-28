import { GenericObjectInterface } from '@interfaces/globalInterfaces';

export function arrayToObject<T>(arr: Array<T>) {
  const obj: GenericObjectInterface<T> = {};
  arr.forEach((elem, i) => (obj[i] = elem));
  return obj;
}
