import NavBar from '@components/NavBar';
import { Logo, SectionWrapper } from '@theme';
import { routes } from '@constants';
import { HeaderContainer } from './styled';

export default () => {
  return (
    <SectionWrapper variant="fenced" color="default">
      <HeaderContainer>
        <Logo />
        <NavBar routes={routes} />
      </HeaderContainer>
    </SectionWrapper>
  );
};
