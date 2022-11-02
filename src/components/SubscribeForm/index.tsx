import { useRef, useState } from 'react';

import { subscribeEmailSchema as validationSchema } from '@constants';

import { useAlertMessage } from '@hooks';

import emailjs from '@emailjs/browser';

import { Button, Typography } from '@mui/material';

import { useFormik } from 'formik';

import AlertMessage from '@components/AlertMessage';

import { Input, InputContainer } from './styled';

const SubscribeForm = () => {
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
      <Typography variant="subtitle1">{formik.errors.email}</Typography>
      {alertProps.severity && <AlertMessage {...alertProps} />}
    </form>
  );
};

export default SubscribeForm;
