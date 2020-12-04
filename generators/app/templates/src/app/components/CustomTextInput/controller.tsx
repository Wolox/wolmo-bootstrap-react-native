import React from 'react';
import { Controller } from 'react-hook-form';
import CustomTextInput, { CustomTextInputProps } from '@components/CustomTextInput';

interface Props extends CustomTextInputProps, React.ComponentProps<typeof Controller> {
  onFocus?: () => void;
  defaultValue?: string;
}

function CustomTextInputController(props: Props) {
  return <Controller as={CustomTextInput} defaultValue="" {...props} />;
}

export default CustomTextInputController;
