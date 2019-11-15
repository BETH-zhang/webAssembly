import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { withKnobs, number, object, boolean, text, select, date, array, color } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ), {
    notes: 'notesnotesnotes'
  })
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('btn', () => {
    const btnText = text('btnText', 'DIY Button'); //文字控件
    const bold = boolean('Bold', false) //启用控件
    const selectedBgColor = color('bgColor', '#fff');//颜色选择器
    const selectedColor = color('Color', 'black');
    const fontSize = number('fontSize', 20)//数字
    const customStyle = object('Style', {
      fontFamily: 'Arial',
      padding: "20px",
    });
    const style = {
      ...customStyle,
      fontWeight: bold ? 800 : 400,
      fontSize: fontSize + 'px',
      color: selectedColor,
      backgroundColor: selectedBgColor
    };
    return  <Button style={style}>{btnText}</Button>
  })
  
storiesOf('测试物料', module)
.add('Test', () => (<div>
   Test
</div>))