import { TouchableOpacityProps } from 'react-native';

export interface ShowPasswordProps {
  onShowPassword: TouchableOpacityProps['onPress'];
  passwordVisible: boolean;
}
