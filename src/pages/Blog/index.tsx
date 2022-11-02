import { useCallback, useDeferredValue, useMemo, useState } from 'react';

import { blogInfo } from '@mocks';

import { Typography } from '@mui/material';

import BlogList from '@components/BlogList';
import FooterLinks from '@components/FooterLinks';
import PageHeader from '@components/PageHeader';
import SearchBar from '@components/SearchBar';
import Subscribe from '@components/SubscribeLayout';

const BlogPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const defferedValue = useDeferredValue(searchValue);

  const handleChangeValue = useCallback((value: string) => setSearchValue(value), []);

  const filteredNews = useMemo(
    () => blogInfo.filter(({ title }) => title.toLowerCase().includes(defferedValue)),
    [defferedValue]
  );

  return (
    <>
      <PageHeader
        isDetailed
        title="Discover new things with Ensome blog"
        subtitle="Blog"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
      />
      <SearchBar value={searchValue} setValue={handleChangeValue} />
      {filteredNews.length ? (
        <BlogList news={filteredNews} newsVariant="blog" listDirection="column" />
      ) : (
        <Typography textAlign="center" p={4}>
          Nothing was found
        </Typography>
      )}
      <Subscribe />
      <FooterLinks />
    </>
  );
};

export default BlogPage;
