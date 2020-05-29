type Key = string | number;

export type GenericObjectInterface<T> = {
  [key in Key]: T;
};

export interface Loadable {
  loading: boolean;
}

export type StringObject = GenericObjectInterface<string>;

export type NumberObject = GenericObjectInterface<number>;
