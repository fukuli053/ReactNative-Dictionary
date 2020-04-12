import * as React from 'react';
import {Text, View, Button} from 'react-native';
import Box from '../components/box';
import {Bookmark} from '../components/icons';
import SearchInput from '../components/search-bar';

function SearchView({navigation}) {
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box p={10}>
        <SearchInput />
      </Box>
    </Box>
  );
}

export default SearchView;
