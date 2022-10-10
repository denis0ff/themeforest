import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { contactFields } from '@constants';
import { InitialFormValues } from '@types';
import { Props } from './types';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default ({ variant }: Props) => {
  const initialValues = contactFields.reduce<InitialFormValues>((acc, { label }) => {
    acc[label] = '';
    return acc;
  }, {});
  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
          form.current as HTMLFormElement,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      {contactFields.map(({ label, name, text, placeholder }) => (
        <TextField
          key={name}
          autoComplete="off"
          fullWidth
          margin="dense"
          name={name}
          label={label}
          variant="standard"
          defaultValue={text}
          placeholder={placeholder}
          onChange={formik.handleChange}
        />
      ))}
      <Button type="submit" variant="contained">
        Send
      </Button>
    </form>
  );
};
