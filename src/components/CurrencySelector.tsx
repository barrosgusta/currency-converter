import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface CurrencySelectorProps {
  label: string;
  selectedCurrency: string;
  onChange: (value: string) => void;
  options: string[];
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  label,
  selectedCurrency,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={selectedCurrency}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {options.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="w-5 h-5 absolute right-2 top-3 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default CurrencySelector;
