import * as React from 'react';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  flexbox,
  space,
  borderRadius,
} from 'styled-system';
import {View} from 'react-native';

const Box = styled(View)(
  compose(
    color,
    size,
    space,
    flexbox,
    borderRadius,
  ),
);

export default Box;
