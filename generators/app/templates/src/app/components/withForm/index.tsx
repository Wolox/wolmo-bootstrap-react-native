import React, { useState } from 'react';
import { useField } from 'formik';

const withFormikField = (WrappedComponent: any) => ({ name, showError, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [field, meta, helper] = useField({ ...props, name });
  const { error, touched } = meta;
  const handleBlur = () => {
    setIsFocused(false);
    field.onBlur(name);
    helper.setTouched(true);
  };
  const handleFocus = () => setIsFocused(true);
  return (
    <WrappedComponent
      {...field}
      {...props}
      error={touched ? error : null}
      isFocused={isFocused}
      onBlur={handleBlur}
      onChange={helper.setValue}
      onFocus={handleFocus}
      showError={(touched && error) || showError}
    />
  );
};

export default withFormikField;
