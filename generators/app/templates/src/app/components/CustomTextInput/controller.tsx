import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Controller, ControllerProps } from 'react-hook-form';
import CustomTextInput from '@components/CustomTextInput';
import { CustomTextInputProps } from '@components/CustomTextInput/interface';

type Props = CustomTextInputProps & Omit<ControllerProps<typeof CustomTextInput>, 'render'>;

const CustomTextInputController = forwardRef<TextInput, Props>((props, ref) => (
  <Controller as={<CustomTextInput ref={ref} />} defaultValue="" {...props} />
));

export default CustomTextInputController;
