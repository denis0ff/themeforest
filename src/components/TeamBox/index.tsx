import PersonCard from '@components/PersonCard';
import { SectionWrapper } from '@theme';
import { useState } from 'react';
import { Props } from './types';
import { Masonry, useInfiniteLoader } from 'masonic';
import { getFakeItems, getFakeItemsPromise } from '@utils';

export default ({ persons }: Props) => {
  const [items, setItems] = useState(getFakeItems(0, 9, persons));
  const loadMore = useInfiniteLoader(
    async (startIndex, stopIndex) => {
      const nextItems = await getFakeItemsPromise(startIndex, stopIndex, persons);
      setItems((current) => [...current, ...nextItems]);
    },
    {
      isItemLoaded: (index, items) => !!items[index],
      minimumBatchSize: 9,
      threshold: 3,
    }
  );

  return (
    <SectionWrapper bgColor="default" variant="fenced" pt={8} pb={8}>
      <Masonry
        onRender={loadMore}
        items={items}
        rowGutter={30}
        columnWidth={350}
        overscanBy={1.25}
        render={PersonCard}
        maxColumnCount={3}
      />
    </SectionWrapper>
  );
};
