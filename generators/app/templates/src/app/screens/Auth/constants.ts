export const FIELDS = {
  name: 'name',
  surname: 'surname',
  birthDate: 'birthDate',
  sex: 'sex',
  email: 'email',
  password: 'password',
  phoneNumber: 'phoneNumber'
} as const;

export const SIGNUP_INITIAL_VALUES = {
  [FIELDS.name]: '',
  [FIELDS.surname]: '',
  [FIELDS.birthDate]: '',
  [FIELDS.sex]: '',
  [FIELDS.email]: '',
  [FIELDS.password]: '',
  [FIELDS.phoneNumber]: ''
};

export interface LoginFormValues {
  [FIELDS.email]: string;
  [FIELDS.password]: string;
}
