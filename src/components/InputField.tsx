import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-semibold text-gray-700">Amount</label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <CurrencyDollarIcon className="w-5 h-5 absolute left-2 top-3 text-gray-500" />
      </div>
    </div>
  );
};

export default InputField;
