import { usePagination } from '@hooks';

import { SectionWrapper } from '@theme';

import { Typography } from '@mui/material';

import BlogList from '@components/BlogList';
import Pagination from '@components/Pagination';

import { Header } from './styled';
import { Props } from './types';

const HomeBlog = ({ title, items }: Props) => {
  const [showBlog, ...props] = usePagination(items, 3);

  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column" mt={8} mb={8}>
      <Header direction="row" spacing={3}>
        <Typography variant="h2">{title}</Typography>
        <Pagination props={props} />
      </Header>
      <BlogList news={showBlog} newsVariant="home" listDirection="row" />
    </SectionWrapper>
  );
};

export default HomeBlog;
