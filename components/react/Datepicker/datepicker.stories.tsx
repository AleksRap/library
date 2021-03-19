import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Datepicker from '.';

storiesOf('Basic', module).add('Datepicker', () => {
  const [start, setStart] = useState<Date>(new Date());

  return (
    <Datepicker start={start} setStart={setStart} />
  );
});
