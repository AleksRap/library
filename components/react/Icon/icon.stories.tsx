import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { Icon as Value } from 'types';
import Icon from '.';

const icons: Value[] = [
  'diagram',
  'book',
  'coin',
  'bell',
  'clock',
  'wallet',
  'adduser',
  'copy',
  'pencil',
  'cross',
  'checkmark',
  'dropdown',
];

const style: CSSProperties = {
  marginRight: 10,
  fontSize: 22,
};

storiesOf('Basic', module).add('Icon', () => (
  <>
    {icons.map((icon) => (
      <Icon key={icon} value={icon} style={style} />
    ))}
  </>
));
