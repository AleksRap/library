import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from 'components/Modal/Modal/index';

storiesOf('Basic', module).add('Modal', () => (
  <Modal
    isOpen
    onClose={() => {}}
    title="Test"
  >
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
  </Modal>
));
