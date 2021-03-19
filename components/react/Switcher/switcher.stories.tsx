import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Switcher from '.';

storiesOf('Basic', module).add('Switcher', () => {
  const isActive = boolean('Active', false);

  return (
    <Switcher
      id="1"
      name="checkbox"
      isChecked={isActive}
    />
  );
});
