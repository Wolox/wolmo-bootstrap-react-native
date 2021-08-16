import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Controller, ControllerProps, Control } from 'react-hook-form';
import CustomTextInput from '@components/CustomTextInput';
import { CustomTextInputProps } from '@components/CustomTextInput/interface';

type Props = CustomTextInputProps & Omit<ControllerProps, 'control' | 'render'> & { control: Control<any> };

const CustomTextInputController = forwardRef<TextInput, Props>(function CustomTextInputController(
  { name, control, defaultValue = '', rules, ...props },
  ref
) {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, ...fieldProps }, fieldState: { error } }) => (
        <CustomTextInput
          {...props}
          {...fieldProps}
          error={error?.message}
          onBlur={e => {
            onBlur();
            if (props.onBlur) props.onBlur(e);
          }}
          onChange={e => {
            onChange(e);
            if (props.onChange) props.onChange(e);
          }}
          ref={ref}
        />
      )}
    />
  );
});

export default CustomTextInputController;
