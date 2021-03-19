import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  select,
  text,
  radios,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Basic', module).add('Button', () => {
  const color = select('Color', {
    green: 'green',
    purple: 'purple',
  }, 'green');

  const size = select('Size', {
    normal: 'normal',
    big: 'big',
  }, 'normal');

  const onClick = action('onClick');

  const children = text('Children', 'Connect your wallet');
  const disabled = boolean('Disabled', false);
  const isFullWidth = boolean('Is full width', false);

  const type = radios('Type', {
    button: 'button',
    submit: 'submit',
  }, 'button');

  return (
    <Button
      type={type}
      isFullWidth={isFullWidth}
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
