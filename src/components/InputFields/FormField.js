import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import TextInputField from './TextInputField';
import DropdownField from './DropdownField';
import {inputTypes} from './inputTypes';

const FormField = ({field, value, error, onChange}) => {
  const {
    type,
    field: fieldName,
    label,
    placeholder,
    options,
    editable,
    customStyle,
    textColor,
    handlePress,
    loading,
    multi,
    required,
  } = field;

  const InputComponent = inputTypes[type];

  if (InputComponent) {
    return (
      <InputComponent
        fieldName={fieldName}
        label={label}
        placeholder={placeholder}
        options={options}
        value={value}
        error={error}
        onChange={onChange}
        editable={editable}
        multiData={multi}
        required={required}
        type={type}
        {...field}
      />
    );
  }

  if (type === 'button') {
    return (
      <TouchableOpacity
        style={[styles.button, customStyle]}
        onPress={handlePress}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <Text style={[styles.buttonText, {color: textColor}]}>
            {field.text}
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormField;
