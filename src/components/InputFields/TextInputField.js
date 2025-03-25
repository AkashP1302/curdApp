import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  blackColor,
  dangerColor,
  offBlackColor,
  whiteColor,
} from '../../theme/appTheme';

const TextInputField = ({
  label,
  fieldName,
  value,
  placeholder,
  error,
  onChange,
  editable = true,
  required = false,
  type = 'text',
  maxLength,
  keyboardType,
  onChangeConst,
  setFieldValue,
}) => {
  const handleTextChange = text => {
    let updatedValue = text;

    if (type === 'number') {
      updatedValue = text.replace(/[^0-9]/g, '');
    }

    if (onChangeConst && setFieldValue) {
      onChangeConst(updatedValue, setFieldValue);
    } else {
      onChange(fieldName, updatedValue);
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          !editable && styles.disabledInput,
          error && styles.errorBorder,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange}
        editable={editable}
        keyboardType={
          keyboardType || (type === 'number' ? 'numeric' : 'default')
        }
        maxLength={maxLength}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={offBlackColor}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  required: {
    color: dangerColor,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: whiteColor,
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    color: blackColor,
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
    color: '#888',
  },
  errorBorder: {
    borderColor: dangerColor,
  },
  errorText: {
    color: dangerColor,
    fontSize: 14,
    marginTop: 5,
  },
});

export default TextInputField;
