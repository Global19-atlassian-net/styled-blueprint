import * as React from 'react';
import Toaster from './';
import { storiesOf } from '@storybook/react';

storiesOf('Toaster', module).add('default', () => <Toaster>Click Me</Toaster>);
