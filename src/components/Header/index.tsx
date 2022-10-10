import NavBar from '@components/NavBar';
import { Logo, SectionWrapper } from '@theme';
import { routes } from '@constants';
import { HeaderContainer } from './styled';
import VideoDialog from '@components/VideoDialog';
import { useState } from 'react';
import { Button } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';

export default () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SectionWrapper variant="fenced" bgColor="default">
      <HeaderContainer>
        <Logo />
        <NavBar routes={routes} />
        <Button startIcon={<PlayIcon fontSize="large" />} variant="contained" onClick={handleOpen}>
          Watch the demo
        </Button>
      </HeaderContainer>
      <VideoDialog open={open} onClose={handleClose} />
    </SectionWrapper>
  );
};
