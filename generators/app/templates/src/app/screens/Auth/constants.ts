export const FIELDS = {
  name: 'name',
  surname: 'surname',
  birthDate: 'birthDate',
  sex: 'sex',
  email: 'email',
  password: 'password',
  phoneNumber: 'phoneNumber'
} as const;

export interface SignupFormValues {
  [FIELDS.name]: string;
  [FIELDS.surname]: string;
  [FIELDS.birthDate]: string;
  [FIELDS.sex]: string;
  [FIELDS.email]: string;
  [FIELDS.password]: string;
  [FIELDS.phoneNumber]: string;
}

export interface LoginFormValues {
  [FIELDS.email]: string;
  [FIELDS.password]: string;
}
