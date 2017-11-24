import Immutable from 'seamless-immutable';
import flatten from 'lodash/flatten';
import isObject from 'lodash/isObject';
import merge from 'lodash/merge';

/**
 * Receives an array of strings, and returns an obj with that strings as properties with that string as value.
 * E.G:
 * stringArrayToObject(['A', 'B', 'C']) // { A: 'A', B: 'B', C: 'C' }
 */
export function stringArrayToObject(actionsArray, namespace) {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }
  return Immutable(actionsArray).asObject(actionName => [
    actionName,
    namespace ? `${namespace}:${actionName}` : actionName
  ]);
}

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
