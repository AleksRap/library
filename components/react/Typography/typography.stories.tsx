import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Text,
} from '.';

storiesOf('Basic', module).add('Typography', () => {
  const align = select(
    'Align',
    {
      left: 'left',
      center: 'center',
      right: 'right',
    },
    'left',
  );
  const color = select(
    'Color',
    {
      primary: 'primary',
      'primary-900': 'primary-900',
      secondary: 'secondary',
      'secondary-900': 'secondary-900',
      'secondary-700': 'secondary-700',
      third: 'third',
      'third-900': 'third-900',
      fourth: 'fourth',
      fifth: 'fifth',
      error: 'error',
      'error-900': 'error-900',
      basic: 'basic',
      'basic-900': 'basic-900',
      'basic-700': 'basic-700',
      'basic-500': 'basic-500',
      'basic-300': 'basic-300',
      'basic-100': 'basic-100',
    },
    'primary',
  );

  return (
    <div>
      <H1 align={align} color={color}>H1 heading</H1>
      <H2 align={align} color={color}>H2 heading</H2>
      <H3 align={align} color={color}>H3 heading</H3>
      <H4 align={align} color={color}>H4 heading</H4>
      <H5 align={align} color={color}>H5 heading</H5>
      <Text
        align={align}
        color={color}
      >
        Text
      </Text>
    </div>
  );
});
