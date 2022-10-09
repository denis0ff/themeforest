import PersonCard from '@components/PersonCard';
import { SectionWrapper } from '@theme';
import { GridBox } from './styled';
import { Props } from './types';

export default ({ persons }: Props) => {
  const handleScroll = () => {
    console.log();
  };

  return (
    <SectionWrapper color="default" variant="fenced">
      <GridBox
        gridTemplateColumns="repeat(3, 1fr)"
        rowSpacing={4}
        columnSpacing={4}
        gap={4}
        onScroll={handleScroll}
      >
        {persons.map((props, i) => (
          <PersonCard key={props.title} {...props} isMargin={i === 1 || i === 4 || i === 7} />
        ))}
      </GridBox>
    </SectionWrapper>
  );
};
