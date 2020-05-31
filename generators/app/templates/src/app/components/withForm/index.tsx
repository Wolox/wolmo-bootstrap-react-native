import React, { useState } from 'react';
import { useField } from 'formik';

const withFormikField = (WrappedComponent: any) => ({ name, showError, validate, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [field, meta, helper] = useField(name);
  const { touched } = meta;
  const handleChange = (value: any) => helper.setValue(value);
  const handleBlur = () => {
    setIsFocused(false);
    field.onBlur(name);
    if (!touched) helper.setTouched(true);
    const actualError = validate(field.value);
    if (actualError) {
      setError(actualError);
      helper.setError(actualError);
    } else {
      setError(null);
    }
  };
  const handleFocus = () => setIsFocused(true);
  return (
    <WrappedComponent
      {...props}
      error={error}
      isFocused={isFocused}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      showError={(touched && error) || showError}
      value={field.value}
    />
  );
};

export default withFormikField;
