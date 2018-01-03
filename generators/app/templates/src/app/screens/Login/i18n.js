import { buildTranslations, buildConstants } from '../../../utils/i18nUtils';

const namespace = 'login';
const translations = {
  es: {
    loginMessage: 'Login, {{0}} !',
    user: 'Usuario',
    password: 'Contraseña'
  }
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
