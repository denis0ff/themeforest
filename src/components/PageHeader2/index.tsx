import Breadcrumbs from '@components/Breadcrumbs';
import { Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { Props } from './types';

export default ({ title }: Props) => (
  <SectionWrapper variant="none" bgColor="grey" direction="column" pb={8} pt={8} spacing={4}>
    <Typography variant="h2" component="h2">
      {title}
    </Typography>
    <Breadcrumbs current={title} />
  </SectionWrapper>
);
