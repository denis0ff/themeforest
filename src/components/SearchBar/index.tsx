import SearchIcon from '@mui/icons-material/Search';
import { Paper, InputBase } from '@mui/material';

import { Props } from './types';

const SearchBar = ({ params, value, setValue }: Props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <Paper
      component="form"
      elevation={4}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', alignSelf: 'center', width: 328 }}
    >
      <InputBase
        ref={params && params.InputProps.ref}
        inputProps={params && params.inputProps}
        sx={{ ml: 1, flex: 1 }}
        value={value}
        onChange={handleChange}
        placeholder="Search"
      />
      <SearchIcon />
    </Paper>
  );
};

export default SearchBar;
