import BlogItem from '@components/BlogItem';
import { SectionWrapper } from '@theme';
import { usePortionedPagination } from '@hooks';
import { Props } from './types';
import { Button, Typography } from '@mui/material';
import { getPostsTitle } from '@utils';

export default ({ news, listDirection, newsVariant }: Props) => {
  const portionSize = newsVariant === 'home' || newsVariant === 'blog' ? 9 : 3;
  const [portion, setPage] = usePortionedPagination(news, portionSize);
  const isButton = newsVariant === 'blog' && news.length !== portion.length;
  const title = getPostsTitle(newsVariant);

  return (
    <SectionWrapper
      direction={listDirection}
      variant="fenced"
      bgColor="default"
      spacing={4}
      alignItems="flex-start"
      mb={4}
      mt={4}
    >
      {title && !!news.length && <Typography variant="h6">{title}</Typography>}
      {portion.map((props, i) => (
        <BlogItem key={props.id + String(i)} {...props} variant={newsVariant} />
      ))}
      {isButton && (
        <Button variant="contained" onClick={setPage} sx={{ alignSelf: 'center' }}>
          See more
        </Button>
      )}
    </SectionWrapper>
  );
};
