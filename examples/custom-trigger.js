import 'react-colors-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from 'react-colors-picker';

function changeHandler(colors) {
  return colors;
}

ReactDOM.render(
  <div style={{ textAlign: 'center' }}>
    <ColorPicker
      color={ '#36c' }
      onChange={ changeHandler }
      trigger={ <span className={ 'react-custom-trigger' }>choose color</span> }
    />
  </div>,
  document.getElementById('__react-content')
);
