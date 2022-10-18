import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Props } from './types';

export default ({ toggles, picked, setPicked }: Props) => {
  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newPicked: string) => {
    setPicked(newPicked);
  };

  return (
    <ToggleButtonGroup value={picked} exclusive onChange={handleAlignment} color="primary">
      {toggles.map((toggle) => (
        <ToggleButton value={toggle} key={toggle}>
          {toggle}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
