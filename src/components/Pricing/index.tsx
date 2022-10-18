import { Stack, Typography } from '@mui/material';
import { priceInfo } from '@constants';
import { SectionWrapper } from '@theme';
import PriceCard from '@components/PriceCard';

export default () => {
  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column">
      <Typography variant="h2">Our pricing</Typography>
      <Stack direction="row" spacing={2} pt={2}>
        {priceInfo.map((props) => (
          <PriceCard key={props.title} {...props}></PriceCard>
        ))}
      </Stack>
    </SectionWrapper>
  );
};
