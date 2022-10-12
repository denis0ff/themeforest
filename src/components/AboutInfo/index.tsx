import { Typography } from '@mui/material';
import { Banner, SectionWrapper } from '@theme';
import { Link } from 'react-router-dom';
import { MirroredStack } from './styled';
import { Props } from './types';

export default ({ id, title, paragraph, image, isMirror = false }: Props) => (
  <Link to={`/blog/${id}`}>
    <SectionWrapper variant="fenced" bgColor="default" direction="row" pb={4} pt={4}>
      <MirroredStack direction="column" isMirror={isMirror} m={2}>
        <Typography variant="h4" component="h4">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {paragraph}
        </Typography>
      </MirroredStack>
      <Banner image={image} width="635" height="425" />
    </SectionWrapper>
  </Link>
);
