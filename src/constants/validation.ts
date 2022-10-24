import * as yup from 'yup';

export const sendEmailSchema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  theme: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Theme is required'),
  message: yup.string().min(10, 'Too Short!').max(300, 'Too Long!').required('Message is required'),
});

export const subscribeEmailSchema = yup
  .object()
  .shape({ email: yup.string().email('Enter a valid email').required('Email is required') });
