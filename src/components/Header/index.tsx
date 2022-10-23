import NavBar from '@components/NavBar';
import { Logo, SectionWrapper } from '@theme';
import { routes } from '@constants';
import { HeaderContainer } from './styled';
import VideoDialog from '@components/VideoDialog';
import { useCallback, useState } from 'react';
import { Button } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import { NavLink } from 'react-router-dom';

export default () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <SectionWrapper variant="fenced" bgColor="default">
      <HeaderContainer>
        <NavLink to="/">
          <Logo image="logo" />
        </NavLink>
        <NavBar routes={routes} />
        <Button startIcon={<PlayIcon fontSize="large" />} variant="contained" onClick={handleOpen}>
          Watch the demo
        </Button>
      </HeaderContainer>
      <VideoDialog open={open} onClose={handleClose} />
    </SectionWrapper>
  );
};