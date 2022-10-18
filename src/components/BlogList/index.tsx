import BlogItem from '@components/BlogItem';
import { SectionWrapper } from '@theme';
import { useBlogOptions } from '@hooks';
import { Props } from './types';
import { Button, Typography } from '@mui/material';

export default ({ news, listDirection, newsVariant }: Props) => {
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
