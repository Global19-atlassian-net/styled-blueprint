import * as React from 'react';
import Button from './';
import { storiesOf } from '@storybook/react';

storiesOf('Button/Button', module).add('default', () => (
  <Button>Click Me</Button>
));
