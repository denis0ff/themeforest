import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { contactFields, sendEmailSchema } from '@constants';
import { InitialFormValues } from '@types';
import { Props } from './types';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default ({ variant }: Props) => {
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const initialValues = contactFields.reduce<InitialFormValues>((acc, { name }) => {
    acc[name] = '';
    return acc;
  }, {});
  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues,
    validationSchema: sendEmailSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      setDisabled(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
          form.current as HTMLFormElement,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY as string
        )
        .then(
          () => setMessage('success'),
          () => setMessage('error')
        )
        .finally(() => setDisabled(false));
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      {contactFields.map(({ label, name, placeholder }) => (
        <TextField
          key={name}
          autoComplete="off"
          fullWidth
          margin="dense"
          name={name}
          label={label}
          variant="standard"
          placeholder={placeholder}
          value={formik.values[name]}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.errors[name]}
          onChange={formik.handleChange}
        />
      ))}
      <Button type="submit" variant="contained" disabled={disabled}>
        Send
      </Button>
      {message && (
        <Typography color={message} variant="subtitle2">
          {message}
        </Typography>
      )}
    </form>
  );
};
