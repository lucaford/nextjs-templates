import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

const ColorConfigurationCard: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState('#3490dc');
  const [secondaryColor, setSecondaryColor] = useState('#ffed4a');
  const [dangerColor, setDangerColor] = useState('#e3342f');

  const handlePrimaryColorChange = (color: string) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--color-primary', color);
  };

  const handleSecondaryColorChange = (color: string) => {
    setSecondaryColor(color);
    document.documentElement.style.setProperty('--color-secondary', color);
  };

  const handleDangerColorChange = (color: string) => {
    setDangerColor(color);
    document.documentElement.style.setProperty('--color-danger', color);
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold text-black mb-4 text-center">Color Configuration</h2>
      <p className="text-gray-600 mb-4 text-center">Configure the primary, secondary, and danger colors for the application.</p>
      <div className="mb-4">
        <ColorPicker label="Primary Color" color={primaryColor} onChange={handlePrimaryColorChange} />
      </div>
      <div className="mb-4">
        <ColorPicker label="Secondary Color" color={secondaryColor} onChange={handleSecondaryColorChange} />
      </div>
      <div className="mb-4">
        <ColorPicker label="Danger Color" color={dangerColor} onChange={handleDangerColorChange} />
      </div>
    </div>
  );
};

export default ColorConfigurationCard;
