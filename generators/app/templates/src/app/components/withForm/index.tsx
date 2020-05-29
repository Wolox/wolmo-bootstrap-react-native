import React, { Component } from 'react';
import { connect, getIn } from 'formik';

/* TODO: Migrate this component for a function component builded with hooks */
const withForm = (WrappedComponent: any) => {
  const WithForm: any = class WithFormComponent extends Component<any> {
    componentDidMount() {
      this.props.formik.registerField(this.props.name, this);
    }

    componentDidUpdate(prevProps: any) {
      const { formik, name, validate } = this.props;
      if (name !== prevProps.name) {
        formik.unregisterField(prevProps.name);
        formik.registerField(name, this);
      }

      if (validate !== prevProps.validate) {
        formik.registerField(name, this);
      }
    }

    componentWillUnmount() {
      this.props.formik.unregisterField(this.props.name);
    }

    handleChange = (value: any) => {
      this.props.formik.handleChange(this.props.name)(value);
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    };

    render() {
      const { formik, name, ...inputProps } = this.props;
      const error = getIn(formik.errors, name);
      const touch = getIn(formik.touched, name);
      return (
        <WrappedComponent
          onBlur={formik.handleBlur(name)}
          value={getIn(formik.values, name)}
          {...inputProps}
          error={(touch && error ? error : null) || this.props.error}
          onChange={this.handleChange}
        />
      );
    }
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithForm.displayName = `WithForm(${displayName})`;

  const finalComponent: any = connect(WithForm);
  return finalComponent;
};

export default withForm;
