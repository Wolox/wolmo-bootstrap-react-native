import I18n from 'react-native-i18n';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { mergeObjects } from '@utils/arrayUtils';

import * as translations from '../**/i18n.js';

const t = mergeObjects(Object.values(translations));
const APP_LOCALE = 'es';

I18n.locale = APP_LOCALE;
I18n.defaultLocale = APP_LOCALE;

I18n.fallbacks = true;

I18n.translations = {
  [APP_LOCALE]: t[APP_LOCALE]
};

export default I18n;
