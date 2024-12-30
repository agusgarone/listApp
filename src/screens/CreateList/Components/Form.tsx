import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {FormikInputValue} from '../../../components/FormikInput';
import Button from '../../../components/Button';
import {createListController} from '../Controller/createListController';

const initialValues = {
  name: '',
};

const CreateListForm = ({children}: {children: JSX.Element}) => {
  const {handleFormikSubmit} = createListController();
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
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
