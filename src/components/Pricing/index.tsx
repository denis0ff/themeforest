import { useAlertMessage } from '@hooks';
import { priceInfo } from '@mocks';

import { SectionWrapper } from '@theme';

import { Stack, Typography } from '@mui/material';

import AlertMessage from '@components/AlertMessage';

import PriceCard from '@components/PriceCard';

const Pricing = () => {
  const [alertProps, setSuccess, setError] = useAlertMessage(500000);

  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column">
      <Typography variant="h2">Our pricing</Typography>
      <Stack direction="row" spacing={2} pt={2} pb={2}>
        {priceInfo.map((props) => (
          <PriceCard
            key={props.title}
            {...props}
            setSuccessSubmit={setSuccess}
            setErrorSubmit={setError}
          ></PriceCard>
        ))}
      </Stack>
      {alertProps.severity && <AlertMessage {...alertProps} />}
    </SectionWrapper>
  );
};

export default Pricing;
