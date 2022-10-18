import SearchBar from '@components/SearchBar';
import { Autocomplete } from '@mui/material';
import { useCallback, useState } from 'react';
import { blogInfo } from '@constants';
import BlogItem from '@components/BlogItem';

export default () => {
  const [searchValue, setSearchValue] = useState('');
  const handleChangeOption = useCallback((value: string) => setSearchValue(value), []);

  return (
    <Autocomplete
      freeSolo
      options={blogInfo.map((item) => item)}
      getOptionLabel={(item) => (typeof item !== 'string' ? item.title : item)}
      renderOption={({ id }, option) => <BlogItem key={id} {...option} variant="search-bar" />}
      renderInput={(params) => (
        <SearchBar params={params} value={searchValue} setValue={handleChangeOption} />
      )}
    />
  );
};
