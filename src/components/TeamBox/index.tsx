import PersonCard from '@components/PersonCard';
import { SectionWrapper } from '@theme';
import { useRef, useCallback, useEffect } from 'react';
import { usePortionedPagination } from '@hooks';
import { GridBox } from './styled';
import { Props } from './types';

export default ({ persons }: Props) => {
  const [portion, setPage] = usePortionedPagination(persons, 9);
  const loader = useRef(null);

  const handleObserver = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) setPage();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <SectionWrapper bgColor="default" variant="fenced">
      <GridBox gridTemplateColumns="repeat(3, 1fr)" rowSpacing={4} columnSpacing={4} gap={4}>
        {portion.map((props, i) => (
          <PersonCard key={props.title + i} {...props} isMargin={i === 1 || (i - 1) % 3 === 0} />
        ))}
        <div ref={loader} />
      </GridBox>
    </SectionWrapper>
  );
};
