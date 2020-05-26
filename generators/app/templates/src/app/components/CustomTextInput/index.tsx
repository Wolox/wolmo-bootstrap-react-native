import React, { useMemo, memo } from 'react';
import withForm from '@components/withForm';

import AnimatedTextInput from './components/AnimatedTextInput';
import TextInput from './components/TextInput';
import { CustomTextInputProps, AnimatedTextInputProps } from './interface';

interface Props extends CustomTextInputProps, AnimatedTextInputProps {
  animated?: boolean;
}

const CustomTextInput = ({ animated = false, ...props }: Props) => {
  const InputComponent = useMemo(() => (animated ? AnimatedTextInput : TextInput), [animated]);
  return <InputComponent {...props} />;
};

const MyCustomTextInput = memo(CustomTextInput);

export const CustomTextInputField = withForm(MyCustomTextInput);

export default MyCustomTextInput;
