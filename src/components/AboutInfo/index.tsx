import { Typography } from '@mui/material';
import { Banner, SectionWrapper } from '@theme';
import { MirroredStack } from './styled';
import { Props } from './types';

export default ({ title, paragraph, image, isMirror = false }: Props) => (
  <SectionWrapper variant="fenced" bgColor="default" direction="row" pb={4} pt={4} spacing={4}>
    <MirroredStack direction="column" isMirror={isMirror}>
      <Typography variant="h4" component="h4">
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        {paragraph}
      </Typography>
    </MirroredStack>
    <Banner image={image} width="635" height="425" />
  </SectionWrapper>
);
