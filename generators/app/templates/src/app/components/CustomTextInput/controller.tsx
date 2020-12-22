import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Controller, ControllerProps } from 'react-hook-form';
import CustomTextInput from '@components/CustomTextInput';
import { CustomTextInputProps } from '@components/CustomTextInput/interface';

type Props = CustomTextInputProps & ControllerProps<typeof CustomTextInput>;

const CustomTextInputController = forwardRef<TextInput, Props>(function CustomTextInputController(
  { name, control, defaultValue = '', rules, onFocus, ...props },
  ref
) {
  return (
    <Controller
      render={({ onChange, onBlur, ...renderProps }) => (
        <CustomTextInput
          {...props}
          onChange={e => {
            onChange(e);
            if (props.onChange) props.onChange(e);
          }}
          onBlur={e => {
            onBlur();
            if (props.onBlur) props.onBlur(e);
          }}
          {...renderProps}
          ref={ref}
        />
      )}
      defaultValue={defaultValue}
      name={name}
      control={control}
      rules={rules}
      onFocus={onFocus}
    />
  );
});

export default CustomTextInputController;
