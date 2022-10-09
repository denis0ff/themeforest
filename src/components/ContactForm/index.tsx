import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { contactFields } from '@constants';
import { InitialFormValues } from '@types';
import { Props } from './types';

export default ({ variant }: Props) => {
  const initialValues = contactFields.reduce<InitialFormValues>((acc, { label }) => {
    acc[label] = '';
    return acc;
  }, {});

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {contactFields.map(({ label, text, placeholder }) => (
        <TextField
          key={label}
          autoComplete="off"
          fullWidth
          margin="dense"
          name={label}
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
