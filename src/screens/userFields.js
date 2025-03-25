export const userFields = [
  {
    type: 'text',
    field: 'name',
    label: 'Full Name',
    placeholder: 'Enter your name',
    required: true,
  },
  {
    type: 'text',
    field: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
    required: true,
  },
  {
    type: 'text',
    field: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    validation: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorMessage: 'Invalid email format',
    },
    onChangeConst: (value, setFormValues, setErrors) => {
      setFormValues(prev => ({...prev, email: value}));

      // Dynamically validate based on field config
      const fieldConfig = userFields.find(f => f.field === 'email');
      if (fieldConfig?.validation?.pattern.test(value)) {
        setErrors(prev => ({...prev, email: null})); // Clear error if valid
      } else {
        setErrors(prev => ({
          ...prev,
          email:
            fieldConfig?.validation?.errorMessage || 'Invalid email format',
        }));
      }
    },
  },
  {
    type: 'number',
    field: 'phone',
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    required: true,
    maxLength: 10,
    keyboardType: 'numeric',
    validation: {
      pattern: /^[6-9][0-9]{9}$/,
      errorMessage: 'Enter a valid 10-digit Indian phone number',
    },
    onChangeConst: (value, setFormValues, setErrors) => {
      let sanitizedValue = value.replace(/\D/g, '');
      setFormValues(prev => ({...prev, phone: sanitizedValue}));
      const fieldConfig = userFields.find(f => f.field === 'phone');
      if (fieldConfig?.validation?.pattern.test(sanitizedValue)) {
        setErrors(prev => ({...prev, phone: null}));
      } else {
        setErrors(prev => ({
          ...prev,
          phone:
            fieldConfig?.validation?.errorMessage || 'Invalid phone number',
        }));
      }
    },
  },
  {
    type: 'text',
    field: 'website',
    label: 'Website',
    placeholder: 'Enter your website',
  },
  // {
  //   type: 'button',
  //   text: 'Save',
  // },
];
