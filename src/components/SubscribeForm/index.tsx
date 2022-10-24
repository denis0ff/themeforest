import { Button, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { subscribeEmailSchema as validationSchema } from '@constants';
import { useAlertMessage } from '@hooks';
import AlertMessage from '@components/AlertMessage';
import { Input, InputContainer } from './styled';

export default () => {
  const [alertProps, setSuccess, setError] = useAlertMessage(5000);
  const [disabled, setDisabled] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setDisabled(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_SUBSCRIBE as string,
          form.current as HTMLFormElement,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY as string
        )
        .then(
          () => {
            setSuccess({
              title: 'Success',
              description: "You've been successfully subscribed",
            });
            resetForm();
          },
          () =>
            setError({
              title: 'Error',
              description: 'Service is unavailable. Please try to subscribe later',
            })
        )
        .finally(() => setDisabled(false));
    },
  });
  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Input
          name="email"
          placeholder="Your email"
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.values.email)}
          onChange={formik.handleChange}
        />
        <Button color="secondary" variant="text" disabled={disabled} type="submit">
          Send
        </Button>
      </InputContainer>
      <Typography>{formik.errors.email}</Typography>
      {alertProps.severity && <AlertMessage {...alertProps} />}
    </form>
  );
};
