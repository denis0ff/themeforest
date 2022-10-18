import { Navigate, useParams } from 'react-router-dom';
import { blogInfo } from '@constants';
import PageHeader2 from '@components/PageHeader2';
import { Banner, SectionWrapper } from '@theme';
import { Post } from './styled';
import { Stack, Typography } from '@mui/material';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import Subscribe from '@components/Subscribe';
import FooterLinks from '@components/FooterLinks';
import TagList from '@components/TagList';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BlogList from '@components/BlogList';
import { getPopularNews, getRelatedNews } from '@utils';
import SearchBarNavigation from '@components/SearchBarNavigation';

export default () => {
  const { id: newsId } = useParams();
  const item = blogInfo.find(({ id }) => id === newsId);

  if (!item) return <Navigate to="/themeforest/404" />;

  const { title, data, image, subtitle, tags, id } = item;

  return (
    <>
      <PageHeader2 title={title} />
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
