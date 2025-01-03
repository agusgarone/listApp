import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, FormikState} from 'formik';
import {FormikInputValue} from '../../../components/FormikInput';
import Button from '../../../components/Button';

const CreateListForm = ({
  children,
  initialValues,
  handleFormikSubmit,
}: {
  children: JSX.Element;
  initialValues: {name: string};
  handleFormikSubmit: (
    values: {
      name: string;
    },
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
      resetForm: (nextState?: Partial<FormikState<any>>) => void;
    },
  ) => Promise<any>;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormikSubmit}
      enableReinitialize>
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <View style={{marginTop: 16}}>
              <FormikInputValue
                name="name"
                placeholder={'Nombre de la lista'}
                onChange={() => null}
              />
            </View>
            <View style={styles.containerResult}>
              {children}
              <View style={styles.containerButton}>
                <Button
                  children="Listo"
                  isDisabled={false}
                  type="primary"
                  onPress={handleSubmit}
                  key={'Button'}
                />
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    height: '100%',
    flex: 1,
    display: 'flex',
  },
  containerResult: {
    flex: 6,
    width: '100%',
    display: 'flex',
  },
  containerButton: {
    width: '100%',
    display: 'flex',
    marginBottom: 32,
  },
});

export default CreateListForm;
