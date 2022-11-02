import { usePagination } from '@hooks';

import { SectionWrapper } from '@theme';

import { Stack, Typography } from '@mui/material';

import Pagination from '@components/Pagination';
import Testimonial from '@components/Testimonial';

import { Header } from './styled';
import { Props } from './types';

const Testimonials = ({ title, items, count }: Props) => {
  const [showPersons, ...props] = usePagination(items, count);

  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column" mb={8} spacing={4}>
      <Header direction="row" spacing={2}>
        <Typography variant="h2">{title}</Typography>
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

export default Testimonials;
