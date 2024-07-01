import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

type ColorPickerProps = {
  label: string;
  color: string;
  onChange: (color: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: any) => {
    setCurrentColor(color.hex);
    onChange(color.hex);
  };

  return (
    <div className="flex items-center">
      <label className="block text-sm font-medium text-gray-700 mr-4">{label}</label>
      <div style={{ display: 'inline-block' }} onClick={handleClick}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '4px',
            background: currentColor,
            cursor: 'pointer',
            border: '1px solid #ccc',
          }}
        />
      </div>
      {displayColorPicker ? (
        <div style={{ position: 'absolute', zIndex: '2' }}>
          <div style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }} onClick={handleClose} />
          <ChromePicker color={currentColor} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
