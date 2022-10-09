import FaqItem from '@components/FaqItem';
import Footer from '@components/Footer';
import PageHeader from '@components/PageHeader';
import { faqList } from '@constants';
import { SectionWrapper } from '@theme';

export default () => (
  <>
    <PageHeader title="Frequently asked questions" subtitle="FAQs" />
    <SectionWrapper color="default" variant="fenced" direction="column">
      {faqList.map((props) => (
        <FaqItem key={props.title} {...props} />
      ))}
    </SectionWrapper>
    <Footer />
  </>
);
