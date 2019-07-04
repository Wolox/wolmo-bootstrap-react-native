import { isAndroid } from '@constants/platform';
import { SOURCE_SANS_PRO, REGULAR, SEMIBOLD, BOLD } from '@constants/fonts';
import { moderateScale } from '@utils/scalingUtils';

const fonts = {
  [SOURCE_SANS_PRO]: {
    weights: {
      [REGULAR]: '400',
      [SEMIBOLD]: '600',
      [BOLD]: '700'
    },
    styles: {}
  }
};

export const fontMaker = (options = {}) => {
  const { size = null, color = null } = options;
  let { weight = null, style = null, family = SOURCE_SANS_PRO } = options;

  let font = {};
  const { weights, styles } = fonts[family];

  if (isAndroid) {
    weight = weight !== REGULAR && weights[weight] ? weight : '';
    style = styles[style] ? style : '';

    family = family.split(' ').join('');
    const suffix = weight + style;

    font = { fontFamily: family + (suffix.length ? `-${suffix}` : '') };
  } else {
    weight = weights[weight] || weights[REGULAR];
    style = styles[style] || 'normal';

    font = { fontFamily: family, fontWeight: weight, fontStyle: style };
  }

  font = size ? { ...font, fontSize: moderateScale(size) } : font;
  font = color ? { ...font, color } : font;

  return font;
};
