import TagList from '@components/TagList';
import { Stack, Typography } from '@mui/material';
import { Banner } from '@theme';
import { Link } from 'react-router-dom';
import { Props } from './types';
import ArrowRight from '@mui/icons-material/ArrowRightAlt';
import { getImageSize, getNewsOptions, sliceTextWithDots } from '@utils';

export default ({ id, image, title, subtitle, paragraph, tags, variant }: Props) => {
  const { direction, isLink, isParagraph, isTag, isSubtitle, titleVariant } =
    getNewsOptions(variant);

  return (
    <Link to={`/themeforest/blog/${id}`}>
      <Stack direction={direction} alignItems="center" spacing={2} width="100%" p={1}>
        <Banner image={image} {...getImageSize(variant)} />
        <div>
          {isSubtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
          <Typography variant={titleVariant} component="h4">
            {title}
          </Typography>
          {isParagraph && <Typography variant="body1">{sliceTextWithDots(paragraph)}</Typography>}
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
