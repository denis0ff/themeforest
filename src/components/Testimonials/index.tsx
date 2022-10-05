import { Stack, Typography } from '@mui/material';
import { Header } from './styled';
import { Props } from './types';
import { usePagination } from '@hooks';
import Pagination from '@components/Pagination';
import Testimonial from '@components/Testimonial';

export default ({ title, items }: Props) => {
  const [showPersons, ...props] = usePagination(items, 3);

  return (
    <>
      <Header direction="row" spacing={3}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <Pagination props={props} />
      </Header>
      <Stack direction="row" spacing={2}>
        {showPersons.map((props) => (
          <Testimonial key={props.title} {...props} />
        ))}
      </Stack>
    </>
  );
};
