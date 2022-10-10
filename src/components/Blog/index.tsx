import { Stack, Typography } from '@mui/material';
import { Header } from './styled';
import { Props } from './types';
import { usePagination } from '@hooks';
import Pagination from '@components/Pagination';
import BlogCard from '@components/BlogCard';
import { SectionWrapper } from '@theme';

export default ({ title, items }: Props) => {
  const [showBlog, ...props] = usePagination(items, 3);

  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column" mt={8} mb={8}>
      <Header direction="row" spacing={3}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <Pagination props={props} />
      </Header>
      <Stack direction="row" spacing={2}>
        {showBlog.map((props) => (
          <BlogCard key={props.title} {...props} />
        ))}
      </Stack>
    </SectionWrapper>
  );
};
