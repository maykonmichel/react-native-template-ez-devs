import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './styles';
import { Button, Input } from '../../components';

export default class Form extends React.Component {
  initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .label('Email')
      .required(),
    password: Yup.string()
      .min(6)
      .label('Senha')
      .required(),
    confirmPassword: Yup.string()
      .label('Confirmação da senha')
      .oneOf([Yup.ref('password', null)], 'As senhas devem ser iguais')
      .required()
  });

  onSubmit = async (values, bag) => {
    try {
      // Fetch data here
    } catch (error) {
      bag.setErrors(error);
    } finally {
      bag.setSubmitting(false);
    }
  };

  renderForm = ({
    values,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
    isValid,
    isSubmitting
  }) => (
    <>
      <Input
        label="Email"
        autoCapitalize="none"
        value={values.email}
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        name="email"
        error={touched.email && errors.email}
      />
      <Input
        label="Senha"
        autoCapitalize="none"
        secureTextEntry
        value={values.password}
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        name="password"
        error={touched.password && errors.password}
      />
      <Input
        label="Confirmação da senha"
        autoCapitalize="none"
        secureTextEntry
        value={values.confirmPassword}
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        name="confirmPassword"
        error={touched.confirmPassword && errors.confirmPassword}
      />
      <Button
        title="ENTRAR"
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
      />
    </>
  );

  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.onSubmit}
          validationSchema={this.validationSchema}
          render={this.renderForm}
        />
      </View>
    );
  }
}
