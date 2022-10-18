import { AutocompleteRenderInputParams } from '@mui/material';

export type Props = {
  params?: AutocompleteRenderInputParams;
  value: string;
  setValue: (value: string) => void;
};
