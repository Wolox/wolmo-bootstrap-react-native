import { black } from '@constants/colors';
import { fontMaker } from '@utils/fontUtils';

// Here you can make your custom fonts
// Example: defaultFont: fontMaker({ weight: SEMIBOLD, size: 20, color: blue, style: ITALIC })
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: 16, color: black })
};
