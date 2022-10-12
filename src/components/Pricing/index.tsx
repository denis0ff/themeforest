import { Button, Stack, Typography } from '@mui/material';
import { priceInfo, rateToggles } from '@constants';
import ToggleGroup from '@components/ToggleGroup';
import { SectionWrapper } from '@theme';
import ProsList from '@components/ProsList';
import { PriceCard } from './styled';

export default () => {
  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column">
      <Typography variant="h2">Our pricing</Typography>
      <Stack direction="row" spacing={2} pt={2}>
        {priceInfo.map(({ title, price, possibilities }) => (
          <PriceCard key={title}>
            <Typography variant="h6">{title}</Typography>
            <Stack
              direction="row"
              spacing={1}
              p={1}
              pb={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4">{price}</Typography>
              <ToggleGroup toggles={rateToggles} />
            </Stack>
            <Button variant="contained">Choose plan</Button>
            <ProsList items={possibilities.map((title) => ({ title: title }))} />
          </PriceCard>
        ))}
      </Stack>
    </SectionWrapper>
  );
};
