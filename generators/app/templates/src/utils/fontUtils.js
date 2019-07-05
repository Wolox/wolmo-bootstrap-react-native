import { isAndroid } from '@constants/platform';
import { DEFAULT_FONT, LIGHT, REGULAR, SEMIBOLD, BOLD, BLACK, NORMAL, ITALIC } from '@constants/fonts';
import { moderateScale } from '@utils/scalingUtils';

// Here you can replace DEFAULT_FONT with your custom font
const fonts = {
  [DEFAULT_FONT]: {
    weights: {
      [LIGHT]: '300',
      [REGULAR]: '400',
      [SEMIBOLD]: '600',
      [BOLD]: '700',
      [BLACK]: '900'
    },
    styles: {
      [NORMAL]: 'normal',
      [ITALIC]: 'Italic'
    }
  }
};

export const fontMaker = (options = {}) => {
  const { size = null, color = null } = options;
  // Here you can change it too
  let { weight = null, style = null, family = DEFAULT_FONT } = options;

  let font = {};
  const { weights, styles } = fonts[family];

  if (family !== DEFAULT_FONT && isAndroid) {
    weight = weight !== REGULAR && weights[weight] ? weight : '';
    style = style !== NORMAL && styles[style] ? style : '';

    family = family.split(' ').join('');
    const suffix = weight + style;

    font = { fontFamily: family + (suffix.length ? `-${suffix}` : '') };
  } else {
    weight = weights[weight] || weights[REGULAR];
    style = styles[style] || styles[NORMAL];

    font = { fontFamily: family, fontWeight: weight, fontStyle: style };
  }

  font = size ? { ...font, fontSize: moderateScale(size) } : font;
  font = color ? { ...font, color } : font;

  return font;
};
