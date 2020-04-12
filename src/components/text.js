import * as React from 'react';
import styled from 'styled-components';
import {compose, color, size, typography, space} from 'styled-system';
import {Text as T} from 'react-native';

const Text = styled(T)(
  compose(
    typography,
    space,
    color,
    size,
  ),
);

export default Text;
