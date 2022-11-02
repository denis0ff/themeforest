import { SectionWrapper } from '@theme';

import { Stack, Typography } from '@mui/material';

import Breadcrumbs from '@components/Breadcrumbs';

import { Props } from './types';

const PageHeader = ({
  title,
  subtitle,
  description = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
  isDetailed = false,
}: Props) =>
  isDetailed ? (
    <SectionWrapper
      variant="fenced"
      bgColor="default"
      direction="column"
      spacing={2}
      textAlign="center"
    >
      {subtitle && (
        <Stack alignSelf="flex-start">
          <Breadcrumbs current={subtitle} />
        </Stack>
      )}
      <SectionWrapper
        variant="fenced"
        bgColor="default"
        direction="column"
        spacing={2}
        pb={5}
        pt={2}
      >
        <Typography variant="body1" component="span">
          {subtitle}
        </Typography>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="subtitle1" component="p">
          {description}
        </Typography>
      </SectionWrapper>
    </SectionWrapper>
  ) : (
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

export default PageHeader;
