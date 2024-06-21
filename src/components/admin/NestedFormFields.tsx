import React from 'react';

interface NestedFormFieldsProps {
  data: Record<string, any>;
  onChange: (path: string, value: any) => void;
  path?: string;
  level?: number;
}

const NestedFormFields: React.FC<NestedFormFieldsProps> = ({ data, onChange, path = '', level = 0 }) => {
  const handleChange = (key: string, value: any) => {
    const fullPath = path ? `${path}.${key}` : key;
    onChange(fullPath, value);
  };

  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={`mb-4 ${level === 0 ? 'p-5 bg-gray-100 rounded-lg shadow-md mb-6' : ''}`}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {key}:
          </label>
          {typeof value === 'object' && value !== null ? (
            <div className="ml-4">
              <NestedFormFields data={value} onChange={onChange} path={path ? `${path}.${key}` : key} level={level + 1} />
            </div>
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedFormFields;
