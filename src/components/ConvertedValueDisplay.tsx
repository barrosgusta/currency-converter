import React from "react";

interface ConvertedValueDisplayProps {
  value: number | null;
}

const ConvertedValueDisplay: React.FC<ConvertedValueDisplayProps> = ({
  value,
}) => {
  return (
    <div className="text-center mt-6">
      {value !== null ? (
        <p className="text-lg font-semibold text-green-600">
          Converted Value: {value.toFixed(2)}
        </p>
      ) : (
        <p className="text-gray-500">
          Enter an amount and select currencies to convert.
        </p>
      )}
    </div>
  );
};

export default ConvertedValueDisplay;
