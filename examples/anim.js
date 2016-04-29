import 'react-colors-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from 'react-colors-picker';

function changeHandler(colors) {
  console.log(colors);
  return colors;
}

ReactDOM.render(
  <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
    <ColorPicker
      animation="slide-up"
      color={ '#36c' }
      onChange={ changeHandler }
    />
  </div>,
  document.getElementById('__react-content')
);
