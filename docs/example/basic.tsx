import ColorPicker from '@rc-component/color-picker';
import React, { useState } from 'react';
import '../../assets/index.less';
import { defaultColor } from '../../src/util';

export default () => {
  const [value, setValue] = useState(defaultColor);

  return (
    <div>
      <p>
        hex:
        {value.getAlpha() === 1 ? value.toHexString() : value?.toHex8String()}
      </p>
      <p>hsv: {value?.toHsvString()}</p>
      <p>rbg: {value?.toRgbString()}</p>
      <ColorPicker
        value={value}
        panelRender={panel => {
          return <div>{panel}</div>;
        }}
        onChange={value => {
          setValue(value);
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: value?.toRgbString(),
          }}
        ></div>
      </ColorPicker>
    </div>
  );
};
