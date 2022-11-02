import { Link } from 'react-router-dom';

import { getNewsUrl } from '@constants';
import { Banner, SectionWrapper } from '@theme';

import { Typography } from '@mui/material';

import { MirroredStack } from './styled';
import { Props } from './types';

const AboutInfo = ({ id, title, paragraph, image, isMirror = false }: Props) => (
  <Link to={getNewsUrl(id)}>
    <SectionWrapper variant="fenced" bgColor="default" direction="row" pb={4} pt={4}>
      <MirroredStack direction="column" isMirror={isMirror} m={2}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{paragraph}</Typography>
      </MirroredStack>
      <Banner image={image} width="635" height="425" />
    </SectionWrapper>
  </Link>
);

export default AboutInfo;
