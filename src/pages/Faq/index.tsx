import FaqItem from '@components/FaqItem';
import Footer from '@components/Footer';
import PageHeader from '@components/PageHeader';
import { faqList } from '@constants';
import { Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { Fragment, useCallback, useState } from 'react';

export default () => {
  const [activeId, setActiveId] = useState('');

  const handleClickDropdown = useCallback(
    (id: string) => () => setActiveId((prev) => (prev === id ? '' : id)),
    []
  );

  return (
    <>
      <PageHeader title="Frequently asked questions" subtitle="FAQs" />
      <SectionWrapper bgColor="default" variant="fenced" direction="column">
        {faqList.map(({ id, name, items }) => (
          <Fragment key={id}>
            <Typography variant="h4" color="secondary" pt={2}>
              {name}
            </Typography>
            {items.map(({ id, ...props }) => (
              <FaqItem
                key={id}
                {...props}
                isActive={activeId === id}
                handleClick={handleClickDropdown(id)}
              />
            ))}
          </Fragment>
        ))}
      </SectionWrapper>
      <Footer />
    </>
  );
};
