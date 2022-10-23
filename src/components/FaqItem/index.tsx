import React from 'react';
import { Typography } from '@mui/material';
import { Container, FaqTitle } from './styled';
import { Props } from './types';
import AddIcon from '@mui/icons-material/Add';

const FaqItem = ({ isActive, title, description, handleClick }: Props) => {
  return (
    <Container variant="outlined">
      <FaqTitle
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleClick}
      >
        <Typography variant="h6" color={isActive ? 'primary' : 'default'}>
          {title}
        </Typography>
        <AddIcon color={isActive ? 'primary' : 'inherit'} />
      </FaqTitle>
      {isActive && <Typography variant="subtitle1">{description}</Typography>}
    </Container>
  );
};

export default React.memo(FaqItem);
