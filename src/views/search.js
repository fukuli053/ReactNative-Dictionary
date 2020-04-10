import * as React from 'react';
import {Text, View, Button} from 'react-native';
import BoxCenter from '../components/box-center';
import {Bookmark} from '../components/icons';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Text>Aramama</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Bookmark />
    </BoxCenter>
  );
}

export default SearchView;
