import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import { Props } from './types';

export default ({ toggles }: Props) => {
  const [picked, setPicked] = useState(toggles[0]);

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newPicked: string) => {
    setPicked(newPicked);
  };

  return (
    <ToggleButtonGroup
      value={picked}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {toggles.map((toggle) => (
        <ToggleButton value={toggle} key={toggle}>
          {toggle}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
