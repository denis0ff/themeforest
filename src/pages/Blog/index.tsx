import BlogList from '@components/BlogList';
import FooterLinks from '@components/FooterLinks';
import PageHeader from '@components/PageHeader';
import Subscribe from '@components/Subscribe';
import { MOCK_MANY_NEWS } from '@constants';

export default () => (
  <>
    <PageHeader
      title="Discover new things with Ensome blog"
      subtitle="Blog"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    />
    <BlogList news={MOCK_MANY_NEWS} />
    <Subscribe />
    <FooterLinks />
  </>
);
