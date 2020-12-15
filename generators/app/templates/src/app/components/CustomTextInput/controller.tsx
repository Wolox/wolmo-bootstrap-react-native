import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import CustomTextInput from '@components/CustomTextInput';
import { CustomTextInputProps } from '@components/CustomTextInput/interface';

type Props = CustomTextInputProps & Omit<ControllerProps<typeof CustomTextInput>, 'render'>;

function CustomTextInputController(props: Props) {
  return <Controller as={CustomTextInput} defaultValue="" {...props} />;
}

export default CustomTextInputController;
