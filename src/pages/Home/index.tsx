import { Button, Stack, Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { benefitsInfo, blogInfo, clientsInfo, testimonialsInfo } from '@constants';
import { Banner, CenteredBox, CircleLink } from './styled';
import Benefits from '@components/Benefits';
import Testimonials from '@components/Testimonials';
import Pricing from '@components/Pricing';
import Blog from '@components/Blog';
import NeedHelp from '@components/NeedHelp';
import Footer from '@components/Footer';

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
    <SectionWrapper variant="fenced" color="default" direction="column">
      <Typography variant="h3" component="h3">
        We provide services that guarantee your success
      </Typography>
      <Stack direction="row" spacing={1}>
        <Stack direction="row" spacing={1}>
          {clientsInfo.map(({ label, info }) => (
            <CenteredBox key={label + info}>
              <Typography variant="h4" component="h4">
                {info}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {label}
              </Typography>
            </CenteredBox>
          ))}
        </Stack>
        <Typography variant="subtitle1" component="p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
          quam, non mollis quam finibus nec.
        </Typography>
      </Stack>
      <Banner image="clients" height="132"></Banner>
    </SectionWrapper>
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
    <SectionWrapper variant="fenced" color="default" direction="column">
      <Testimonials title="Testimonials" items={testimonialsInfo} />
    </SectionWrapper>
    <SectionWrapper variant="fenced" color="default" direction="column">
      <Pricing />
    </SectionWrapper>
    <SectionWrapper variant="fenced" color="default" direction="column">
      <Blog title="Our blog" items={blogInfo} />
    </SectionWrapper>
    <Footer />
  </>
);
