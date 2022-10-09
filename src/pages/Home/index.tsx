import { Button, Stack, Typography } from '@mui/material';
import { Banner, SectionWrapper } from '@theme';
import { benefitsInfo, blogInfo, testimonialsInfo } from '@constants';
import { CircleLink } from './styled';
import Benefits from '@components/Benefits';
import Testimonials from '@components/Testimonials';
import Pricing from '@components/Pricing';
import Blog from '@components/Blog';
import Footer from '@components/Footer';
import Clients from '@components/Clients';

export default () => (
  <>
    <SectionWrapper variant="fenced" color="default">
      <Typography variant="h2" component="h2">
        Find true power in your data with <span>Ensome</span>
      </Typography>
      <Typography variant="subtitle1" component="p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
      </Typography>
    </SectionWrapper>
    <SectionWrapper variant="none" color="default">
      <Banner image="home1" height="590">
        <CircleLink to="/services">
          Learn more
          <div></div>
        </CircleLink>
      </Banner>
    </SectionWrapper>
    <SectionWrapper variant="fenced" color="default">
      <Typography variant="h2" component="h2">
        The <span>newest</span> business analytics platform
      </Typography>
      <div>
        <Typography variant="subtitle1" component="p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </Typography>
        <Button variant="contained">Discover more</Button>
      </div>
    </SectionWrapper>
    <SectionWrapper variant="none" color="grey">
      <Banner image="home2" width="929" height="740" />
      <div>
        <Typography variant="h3" component="h3">
          Radically new solutions for data
        </Typography>
        <Typography variant="subtitle1" component="p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </Typography>
        <Button variant="contained">Learn more</Button>
      </div>
    </SectionWrapper>
    <Clients />
    <SectionWrapper variant="none" color="grey">
      <SectionWrapper variant="fenced" color="grey">
        <Stack direction="column" spacing={1}>
          <Typography variant="h3" component="h3">
            The benefits of Ensome
          </Typography>
          <Typography variant="subtitle1" component="p">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
            quam, non mollis quam finibus nec.
          </Typography>
        </Stack>
        <Benefits cards={benefitsInfo} />
      </SectionWrapper>
    </SectionWrapper>
    <Testimonials title="Testimonials" items={testimonialsInfo} count={3} />
    <SectionWrapper variant="fenced" color="default" direction="column">
      <Pricing />
    </SectionWrapper>
    <SectionWrapper variant="fenced" color="default" direction="column">
      <Blog title="Our blog" items={blogInfo} />
    </SectionWrapper>
    <Footer />
  </>
);
