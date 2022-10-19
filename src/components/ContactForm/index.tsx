import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { contactFields, sendEmailSchema } from '@constants';
import { Props } from './types';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { reduceFieldsName } from '@utils';
import { useAlertMessage } from '@hooks';
import AlertMessage from '@components/AlertMessage';

export default ({ variant }: Props) => {
  const [alertProps, setSuccess, setError] = useAlertMessage(5000);
  const [disabled, setDisabled] = useState(false);
  const initialValues = reduceFieldsName(contactFields);

  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues,
    validationSchema: sendEmailSchema,
    onSubmit: (_, { resetForm }) => {
      setDisabled(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
          form.current as HTMLFormElement,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY as string
        )
        .then(
          () => {
            setSuccess({
              title: 'Success',
              description:
                'The message was sent. Thank you, we will reply to you as soon as possible',
            });
            resetForm();
          },
          () =>
            setError({
              title: 'Error',
              description: 'Service is unavailable. Please try to send a message later',
            })
        )
        .finally(() => setDisabled(false));
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      {contactFields.map(({ label, name, placeholder, type }) => (
        <TextField
          key={name}
          autoComplete="off"
          fullWidth
          margin="dense"
          name={name}
          label={label}
          type={type}
          variant="standard"
          placeholder={placeholder}
          value={formik.values[name]}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.errors[name]}
          onChange={formik.handleChange}
        />
      ))}
      <Button type="submit" variant="contained" disabled={disabled} sx={{ marginTop: '30px' }}>
        Send
      </Button>
      {alertProps.severity && <AlertMessage {...alertProps} />}
    </form>
  );
};
