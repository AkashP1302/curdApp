import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import FormField from './FormField';
import {appColor, blackColor, whiteColor} from '../../theme/appTheme';

const DynamicForm = ({fields, onSubmit, initialValues}) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormValues(prev => ({...prev, [field]: value}));

    const fieldConfig = fields.find(f => f.field === field);

    if (fieldConfig?.onChangeConst) {
      fieldConfig.onChangeConst(value, setFormValues, setErrors);
    }

    if (errors[field]) {
      validateField(field, value);
    }
  };

  const validateField = (field, value) => {
    const fieldConfig = fields.find(f => f.field === field);

    if (fieldConfig?.required && !value) {
      setErrors(prev => ({
        ...prev,
        [field]: `${fieldConfig.label} is required`,
      }));
      return false;
    }

    if (
      fieldConfig?.validation?.pattern &&
      !fieldConfig.validation.pattern.test(value)
    ) {
      setErrors(prev => ({
        ...prev,
        [field]: fieldConfig.validation.errorMessage || 'Invalid input',
      }));
      return false;
    }

    setErrors(prev => ({...prev, [field]: null}));
    return true;
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    fields.forEach(field => {
      const value = formValues[field.field] || '';

      if (field.required && !value) {
        newErrors[field.field] = `${field.label} is required`;
        valid = false;
      } else if (
        field.validation?.pattern &&
        !field.validation.pattern.test(value)
      ) {
        newErrors[field.field] =
          field.validation.errorMessage || 'Invalid input';
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (!isValid) return;

    setLoading(true);
    try {
      await onSubmit(formValues);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      {fields.map((field, index) => (
        <FormField
          key={index}
          field={field}
          value={formValues[field.field] || ''}
          error={errors[field.field]}
          onChange={handleChange}
        />
      ))}
      {/* Submit Button */}
      <FormField
        field={{
          type: 'button',
          text: loading ? 'loading...' : 'Submit',
          handlePress: handleSubmit,
          disabled: Object.keys(errors).length > 0,
          customStyle: {
            backgroundColor: appColor,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            width: '50%',
            alignSelf: 'center',
            shadowColor: blackColor,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          },
          textColor: whiteColor,
          renderCustom: () =>
            loading ? (
              <ActivityIndicator size="small" color={whiteColor} />
            ) : null,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
});

export default DynamicForm;
