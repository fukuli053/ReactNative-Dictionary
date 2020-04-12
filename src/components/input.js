import * as React from 'react';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  shadow,
  typography,
  space,
  borderRadius,
} from 'styled-system';
import {TextInput} from 'react-native';

import theme from '../utils/theme';

const Input = styled(TextInput).attrs(prop => ({
  placeholderTextColor: theme.colors[prop.placeholderTextColor] || '#999',
}))(
  compose(
    typography,
    space,
    borderRadius,
    color,
    shadow,
    size,
  ),
);

export default Input;
