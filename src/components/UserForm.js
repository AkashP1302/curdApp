import React from 'react';
import {ScrollView} from 'react-native';
import DynamicForm from './InputFields/DynamicForm';
import {userFields} from '../screens/userFields';

const UserForm = ({selectedUser, handleSave}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DynamicForm
        fields={userFields}
        initialValues={selectedUser || {}}
        onSubmit={handleSave}
      />
    </ScrollView>
  );
};

export default UserForm;
