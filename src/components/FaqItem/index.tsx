import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useReducer } from 'react';
import { Container } from './styled';
import { Props } from './types';
import AddIcon from '@mui/icons-material/Add';

export default ({ title, description }: Props) => {
  const [isOpen, setIsOpen] = useReducer((prev) => !prev, false);

  return (
    <Container variant="outlined">
      <Stack direction="row" alignItems="center" justifyContent="space-between" onClick={setIsOpen}>
        <Typography variant="h6" color={isOpen ? 'primary' : 'default'}>
          {title}
        </Typography>
        <AddIcon color={isOpen ? 'primary' : 'inherit'} />
      </Stack>
      {isOpen && <Typography variant="subtitle1">{description}</Typography>}
    </Container>
  );
};
