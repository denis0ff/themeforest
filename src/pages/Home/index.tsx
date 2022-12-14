import { NavLink } from 'react-router-dom';

import { getPageUrl, Paths } from '@constants';
import { benefitsInfo, blogInfo, testimonialsInfo } from '@mocks';

import { Banner, SectionWrapper } from '@theme';

import { Box, Button, Stack, Typography } from '@mui/material';

import Benefits from '@components/Benefits';
import Clients from '@components/Clients';
import Footer from '@components/Footer';
import Blog from '@components/HomeBlog';
import Pricing from '@components/Pricing';
import Testimonials from '@components/Testimonials';

import { CircleLink } from './styled';

const HomePage = () => (
  <>
    <SectionWrapper variant="fenced" bgColor="default" direction="row" mt={8} mb={8}>
      <Typography variant="h1">
        Find true power in your data with{' '}
        <Typography variant="h1" component="span" color="primary">
          Ensome
        </Typography>
      </Typography>
      <Typography variant="body1" component="p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
      </Typography>
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="default">
      <Banner image="home1" height="590">
        <CircleLink to={getPageUrl(Paths.SERVICES)}>
          Learn more
          <div></div>
        </CircleLink>
      </Banner>
    </SectionWrapper>
    <SectionWrapper variant="fenced" bgColor="default" direction="row" mt={8} mb={8}>
      <Typography variant="h1">
        The{' '}
        <Typography variant="h1" component="span" color="primary">
          newest
        </Typography>{' '}
        business analytics platform
      </Typography>
      <div>
        <Typography variant="body1" component="p" mb={4}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </Typography>
        <NavLink to={getPageUrl(Paths.SOLUTIONS)}>
          <Button variant="contained">Discover more</Button>
        </NavLink>
      </div>
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="grey" direction="row" mt={8} mb={8}>
      <Banner image="home2" width="929" height="740" />
      <Box width="100%">
        <Stack ml={2} alignItems="flex-start">
          <Typography variant="h2">Radically new solutions for data</Typography>
          <Typography variant="body1" component="p" mb={2} maxWidth={540}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Typography>
          <NavLink to={getPageUrl(Paths.SOLUTIONS)}>
            <Button variant="contained">Learn more</Button>
          </NavLink>
        </Stack>
      </Box>
    </SectionWrapper>
    <Clients />
    <SectionWrapper variant="none" bgColor="grey" pb={8} pt={8}>
      <SectionWrapper variant="fenced" bgColor="grey" direction="row">
        <Stack direction="column" spacing={1}>
          <Typography variant="h2">The benefits of Ensome</Typography>
          <Typography variant="body1" component="p">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
            quam, non mollis quam finibus nec.
          </Typography>
        </Stack>
        <Benefits cards={benefitsInfo} maxWidth={540} />
      </SectionWrapper>
    </SectionWrapper>
    <Testimonials title="Testimonials" items={testimonialsInfo} count={3} />
    <Pricing />
    <Blog title="Our blog" items={blogInfo} />
    <Footer />
  </>
);

export default HomePage;
