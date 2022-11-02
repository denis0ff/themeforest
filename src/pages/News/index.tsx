import { Navigate, useParams } from 'react-router-dom';

import { getPageUrl, Paths } from '@constants';
import { blogInfo } from '@mocks';

import { Banner, SectionWrapper } from '@theme';

import { getPopularNews, getRelatedNews } from '@utils';

import CalendarIcon from '@mui/icons-material/CalendarMonth';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Stack, Typography } from '@mui/material';

import BlogList from '@components/BlogList';
import FooterLinks from '@components/FooterLinks';
import PageHeader from '@components/PageHeader';
import SearchBarNavigation from '@components/SearchBarNavigation';
import Subscribe from '@components/SubscribeLayout';
import TagList from '@components/TagList';

import { Post } from './styled';

const NewsPage = () => {
  const { id: newsId } = useParams();
  const item = blogInfo.find(({ id }) => id === newsId);

  if (!item) return <Navigate to={getPageUrl(Paths.NOT_FOUND)} />;

  const { title, data, image, subtitle, tags, id } = item;

  return (
    <>
      <PageHeader title={title} />
      <SectionWrapper
        direction="row"
        variant="fenced"
        bgColor="default"
        mt={8}
        mb={8}
        spacing={4}
        alignItems="flex-start"
      >
        <Stack spacing={2} maxWidth={635}>
          <Banner image={image} height="330" width="100%" />
          <Typography
            variant="subtitle2"
            component="div"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <CalendarIcon />
            {subtitle}
          </Typography>
          <Typography variant="h4">{title}</Typography>
          <Post color="secondary" spacing={2} dangerouslySetInnerHTML={{ __html: data }} />
          <Stack direction="row" spacing={1} alignItems="center">
            <LocalOfferIcon fontSize="small" />
            <Typography component="span">Tags:</Typography>
            <TagList tags={tags} />
          </Stack>
        </Stack>
        <Stack>
          <SearchBarNavigation />
          <BlogList
            news={getPopularNews(blogInfo, id)}
            newsVariant="popular"
            listDirection="column"
          />
        </Stack>
      </SectionWrapper>
      <BlogList
        news={getRelatedNews(blogInfo, id, tags)}
        newsVariant="related"
        listDirection="column"
      />
      <Subscribe />
      <FooterLinks />
    </>
  );
};

export default NewsPage;
