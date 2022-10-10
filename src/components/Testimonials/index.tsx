import { Stack, Typography } from '@mui/material';
import { Header } from './styled';
import { Props } from './types';
import { usePagination } from '@hooks';
import Pagination from '@components/Pagination';
import Testimonial from '@components/Testimonial';
import { SectionWrapper } from '@theme';

export default ({ title, items, count }: Props) => {
  const [showPersons, ...props] = usePagination(items, count);

  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column" mt={8} mb={8} spacing={6}>
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
    </SectionWrapper>
  );
};
