import { Link } from 'react-router-dom';

import { getNewsUrl } from '@constants';
import { Banner } from '@theme';

import { getImageSize, getNewsOptions, sliceTextWithDots } from '@utils';

import ArrowRight from '@mui/icons-material/ArrowRightAlt';
import { Typography } from '@mui/material';

import TagList from '@components/TagList';

import { NewsContainer } from './styled';
import { Props } from './types';

const BlogItem = ({ id, image, title, subtitle, paragraph, tags, variant }: Props) => {
  const { direction, isLink, isParagraph, isTag, isSubtitle, titleVariant } =
    getNewsOptions(variant);

  return (
    <Link to={getNewsUrl(id)}>
      <NewsContainer direction={direction} alignItems="center" spacing={2} width="100%" p={1}>
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
      </NewsContainer>
    </Link>
  );
};

export default BlogItem;
