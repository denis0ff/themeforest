import { Box } from '@mui/material';

import FooterLinks from '@components/FooterLinks';
import NeedHelp from '@components/NeedHelp';
import Subscribe from '@components/SubscribeLayout';

const Footer = () => {
  return (
    <Box component="footer">
      <NeedHelp />
      <Subscribe />
      <FooterLinks />
    </Box>
  );
};

export default Footer;
