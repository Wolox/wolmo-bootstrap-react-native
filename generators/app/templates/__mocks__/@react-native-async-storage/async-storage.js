let cache = {};

export const changeCache = object => {
  cache = object;
};
export default {
  setItem: (key, value) =>
    new Promise((resolve, reject) =>
      typeof key !== 'string' || typeof value !== 'string'
        ? reject(new Error('key and value must be string'))
        : resolve((cache[key] = value))
    ),
  getItem: key =>
    new Promise(resolve =>
      Object.prototype.hasOwnProperty.call(cache, key) ? resolve(cache[key]) : resolve(null)
    ),
  removeItem: key =>
    new Promise((resolve, reject) =>
      Object.prototype.hasOwnProperty.call(cache, key)
        ? resolve(delete cache[key])
        : reject(new Error('No such key!'))
    ),
  clear: () => new Promise(resolve => resolve((cache = {}))),

  getAllKeys: () => new Promise(resolve => resolve(Object.keys(cache)))
};
