import { NavLink } from 'react-router-dom';

import { useCallback, useState } from 'react';

import { Paths, routes } from '@constants';

import { Logo, SectionWrapper } from '@theme';

import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import { Button } from '@mui/material';

import NavBar from '@components/NavBar';
import VideoDialog from '@components/VideoDialog';

import { HeaderContainer } from './styled';

const Header = () => {
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
        <NavLink to={Paths.BASE}>
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

export default Header;
