import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Button from './index'
// import { Button } from 'antd'

storiesOf('Basic|Button', module)
  .add('默认状态', () => <Button label="确认提交" onClick={action('clicked')}>确认</Button>)
