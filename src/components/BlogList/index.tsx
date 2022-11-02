import { useBlogOptions } from '@hooks';

import { SectionWrapper } from '@theme';

import { Button, Typography } from '@mui/material';

import BlogItem from '@components/BlogItem';

import { Props } from './types';

const BlogList = ({ news, listDirection, newsVariant }: Props) => {
  const { portion, isButton, title, sectionVariant, setPage } = useBlogOptions(news, newsVariant);

  return (
    <SectionWrapper
      direction={listDirection}
      variant={sectionVariant}
      bgColor="default"
      spacing={4}
      alignItems="flex-start"
      mb={4}
      mt={4}
    >
      {title && !!news.length && <Typography variant="h6">{title}</Typography>}
      {portion.map((props) => (
        <BlogItem key={props.id} {...props} variant={newsVariant} />
      ))}
      {isButton && (
        <Button variant="contained" onClick={setPage} sx={{ alignSelf: 'center' }}>
          See more
        </Button>
      )}
    </SectionWrapper>
  );
};

export default BlogList;
