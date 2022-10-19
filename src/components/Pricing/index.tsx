import { Stack, Typography } from '@mui/material';
import { priceInfo } from '@constants';
import { SectionWrapper } from '@theme';
import PriceCard from '@components/PriceCard';
import { useAlertMessage } from '@hooks';
import AlertMessage from '@components/AlertMessage';

export default () => {
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
