import { fontMaker } from '@utils/fontUtils';
import {
  emperor,
  boulder,
  tundora,
  doveGray,
  dustyGray,
  white,
  caribbeanGreen,
  oceanGreen,
  red
} from '@constants/colors';
import { IS_SMALL_DEVICE } from '@constants/platform';
import { SEMIBOLD, BOLD } from '@constants/fonts';

export const amountToResize = 2 * IS_SMALL_DEVICE;

export default {
  baseFont: fontMaker({ size: 16, color: doveGray }),
  titleFont: fontMaker({ weight: SEMIBOLD, size: 20, color: emperor }),
  subtitleFont: fontMaker({ weight: BOLD, size: 16, color: boulder }),
  dividerAndSectionFont: fontMaker({ weight: BOLD, size: 18, color: emperor }),
  dividerSmallFont: fontMaker({ size: 13, color: boulder }),
  importantText13Font: fontMaker({ weight: SEMIBOLD, size: 13, color: tundora }),
  importantText12Font: fontMaker({ weight: SEMIBOLD, size: 12, color: tundora }),
  primaryTextAndInputFont: fontMaker({ size: 15, color: doveGray }),
  secondaryTextFont: fontMaker({ size: 14, color: dustyGray }),
  selectorAndTabFont: fontMaker({ size: 14, color: doveGray }),
  primaryButtonTextFont: fontMaker({ weight: SEMIBOLD, size: 14, color: white }),
  disabledButtonTextFont: fontMaker({ weight: SEMIBOLD, size: 14, color: white }),
  linkFont: fontMaker({ weight: SEMIBOLD, size: 14, color: caribbeanGreen }),
  priceFont: fontMaker({ weight: SEMIBOLD, size: 14, color: doveGray }),
  secondaryLinkFont: fontMaker({ size: 13, color: caribbeanGreen }),
  greenTextNoLinkFont: fontMaker({ weight: SEMIBOLD, size: 14, color: oceanGreen }),
  textFieldErrorFont: fontMaker({ size: 12, color: red }),
  headerTypeFont: fontMaker({ weight: BOLD, size: 13, color: white }),
  headerLocationFont: fontMaker({ weight: SEMIBOLD, size: 14, color: white }),
  tabBarLabelFont: fontMaker({ weight: SEMIBOLD, size: 10 }),
  topTabBarLabelFont: fontMaker({ weight: SEMIBOLD, size: 14 }),
  headerTitleFont: fontMaker({ weight: BOLD, size: 18, color: emperor })
};
