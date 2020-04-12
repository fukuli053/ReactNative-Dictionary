import * as React from 'react';
import styled from 'styled-components';
import {
  compose,
  space,
  position,
  color,
  size,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';
import {TouchableOpacity} from 'react-native';

const Button = styled(TouchableOpacity)(
  compose(
    color,
    position,
    layout,
    size,
    space,
    borderRadius,
    flexbox,
  ),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
