import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@constants/platform';

const [shortDimension, longDimension] =
  WINDOW_WIDTH < WINDOW_HEIGHT ? [WINDOW_WIDTH, WINDOW_HEIGHT] : [WINDOW_HEIGHT, WINDOW_WIDTH];

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scaleFactor = 0.5;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = scaleFactor) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
