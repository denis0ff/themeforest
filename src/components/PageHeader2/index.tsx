import Breadcrumbs from '@components/Breadcrumbs';
import { Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { Props } from './types';

export default ({ title }: Props) => (
  <SectionWrapper
    variant="none"
    bgColor="grey"
    direction="column"
    pb={8}
    pt={8}
    spacing={4}
    textAlign="center"
  >
    <Typography variant="h1">{title}</Typography>
    <Breadcrumbs current={title} />
  </SectionWrapper>
);
