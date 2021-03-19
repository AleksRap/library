import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '.';

storiesOf('Basic', module).add('Radio', () => (
  <Radio
    id="id"
    value="hello"
    name="test"
  />
));
