import FooterLinks from '@components/FooterLinks';
import NeedHelp from '@components/NeedHelp';
import Subscribe from '@components/Subscribe';
import { Box } from '@mui/material';

export default () => {
  return (
    <Box component="footer">
      <NeedHelp />
      <Subscribe />
      <FooterLinks />
    </Box>
  );
};
