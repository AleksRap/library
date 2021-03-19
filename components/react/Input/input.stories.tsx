import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Input from '.';

storiesOf('Basic', module).add('Input', () => {
  const placeholder = text('Placeholder', 'Enter your e-mail');
  const error = text('Error', '');
  const isCorrect = boolean('IsCorrect', false);
  const disabled = boolean('disabled', false);
  const onChange = action('onChange');

  return (
    <div style={{ width: 400 }}>
      <Input
        id="id"
        name="storybook"
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        isCorrect={isCorrect}
        onChange={onChange}
      />
    </div>
  );
});
