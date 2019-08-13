import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@constants/platform';

const [shortDimension, longDimension] =
  WINDOW_WIDTH < WINDOW_HEIGHT ? [WINDOW_WIDTH, WINDOW_HEIGHT] : [WINDOW_HEIGHT, WINDOW_WIDTH];

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => shortDimension / guidelineBaseWidth * size;
const verticalScale = size => longDimension / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
