import BlogItem from '@components/BlogItem';
import { SectionWrapper } from '@theme';
import { usePortionedPagination } from '@hooks';
import { Props } from './types';
import { Button } from '@mui/material';

export default ({ news }: Props) => {
  const [portion, setPage] = usePortionedPagination(news, 9);

  return (
    <SectionWrapper direction="column" variant="fenced" bgColor="default" mb={8} mt={8} spacing={4}>
      {portion.map((props, i) => (
        <BlogItem key={props.id + String(i)} {...props} />
      ))}
      {news.length !== portion.length && (
        <Button variant="contained" onClick={setPage}>
          See more
        </Button>
      )}
    </SectionWrapper>
  );
};
