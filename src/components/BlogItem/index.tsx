import TagList from '@components/TagList';
import { Stack, Typography } from '@mui/material';
import { Banner } from '@theme';
import { Link } from 'react-router-dom';
import { Props } from './types';
import ArrowRight from '@mui/icons-material/ArrowRightAlt';
import { getImageSize, sliceParagraph } from '@utils';

export default ({ id, image, title, subtitle, paragraph, tags, variant }: Props) => {
  const direction = variant === 'home' ? 'column' : 'row';
  const isParagraph = variant === 'home' || variant === 'related';
  const isTag = variant === 'blog';
  const isLink = variant === 'home' || variant === 'popular';

  return (
    <Link to={`/blog/${id}`}>
      <Stack direction={direction} alignItems="center" spacing={3} width="100%">
        <Banner image={image} {...getImageSize(variant)} />
        <div>
          <Typography variant="subtitle1">{subtitle}</Typography>
          <Typography variant="h4" component="h4">
            {title}
          </Typography>
          {isParagraph && <Typography variant="body1">{sliceParagraph(paragraph)}</Typography>}
          {isTag && <TagList tags={tags} />}
          {isLink && (
            <Typography variant="subtitle2" display="flex" alignItems="center" color="primary">
              Read more <ArrowRight />
            </Typography>
          )}
        </div>
      </Stack>
    </Link>
  );
};
