import flatten from 'lodash/flatten';
import isObject from 'lodash/isObject';
import merge from 'lodash/merge';

export function mergeObjects(roles) {
  const merger = (a, b) => {
    if (isObject(a)) {
      return merge({}, a, b, merger);
    }
    return a || b;
  };
  const args = flatten([{}, roles, merger]);
  return merge(...args);
}

export function arrayToObject(arr) {
  const obj = {};
  arr.forEach((elem, i) => (obj[i] = elem));
  return obj;
}
