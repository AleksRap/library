import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Checkbox from '.';

const name = '1';

storiesOf('Basic', module).add('Checkbox', () => {
  const label = text('label', 'Previous');
  const error = text('error', '');
  const checked = boolean('checked', false);
  const onChange = action('onChange');

  return (
    <Checkbox
      name={name}
      label={label}
      checked={checked}
      error={error}
      onChange={onChange}
    />
  );
});
