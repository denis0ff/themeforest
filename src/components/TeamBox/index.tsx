import PersonCard from '@components/PersonCard';
import { SectionWrapper } from '@theme';
import { useState, useRef, useCallback, useEffect, useReducer } from 'react';
import { GridBox } from './styled';
import { Props } from './types';

const MAX_CARDS = 9;

export default ({ persons }: Props) => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useReducer(
    () => persons.slice(0, page * MAX_CARDS),
    persons.slice(0, page * MAX_CARDS)
  );
  const loader = useRef(null);

  const handleObserver = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) setPage((prev) => prev + 1);
  }, []);

  useEffect(() => setCards(), [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <SectionWrapper bgColor="default" variant="fenced">
      <GridBox gridTemplateColumns="repeat(3, 1fr)" rowSpacing={4} columnSpacing={4} gap={4}>
        {cards.map((props, i) => (
          <PersonCard key={props.title + i} {...props} isMargin={i === 1 || (i - 1) % 3 === 0} />
        ))}
        <div ref={loader} />
      </GridBox>
    </SectionWrapper>
  );
};
