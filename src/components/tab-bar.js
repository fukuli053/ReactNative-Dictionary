import React from 'react';
import {View, Text} from 'react-native';

import Button from './button';
import {Search, Archive, Bookmark} from './icons';
import Box from './box';

import theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-15} bg={'white'} borderRadius={'full'}>
            <Button
              size={56}
              bg={'turquoise'}
              borderRadius={'full'}
              onPress={onPress}>
              <Search stroke={'white'} />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            flexDirection={'column'}
            flex={1}
            pt={6}
            height={56}
            onPress={onPress}>
            {label === 'History' && (
              <Archive stroke={theme.colors.halfDarkBlue} />
            )}
            {label === 'Favorite' && (
              <Bookmark stroke={theme.colors.halfDarkBlue} />
            )}
            <Box size={3} bg={isFocused ? 'turquoise' : 'white'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
