import { useCallback, useState } from 'react';

import { blogInfo } from '@mocks';

import { Autocomplete } from '@mui/material';

import BlogItem from '@components/BlogItem';
import SearchBar from '@components/SearchBar';

const SearchBarNavigation = () => {
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

export default SearchBarNavigation;
