// src/App.tsx

import React, { useState, useEffect } from "react";
import CurrencySelector from "./components/CurrencySelector";
import InputField from "./components/InputField";
import ConvertedValueDisplay from "./components/ConvertedValueDisplay";
import { isPositiveNumber } from "./utils/validation";
import { convertCurrency } from "./utils/conversion";
import Footer from "./components/Footer";

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const App: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedValue, setConvertedValue] = useState<number | null>(null);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>(
    {}
  );
  const [currencies, setCurrencies] = useState<string[]>([]);
  console.log("API Key:", API_KEY);

  // Fetch exchange rates when the component mounts
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setExchangeRates(data.conversion_rates); // Set the exchange rates
        setCurrencies(Object.keys(data.conversion_rates)); // Set the available currencies
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleAmountChange = (value: string) => {
    if (isPositiveNumber(value) || value === "") {
      setAmount(value);
    }
  };

  const handleConvert = () => {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      alert("Please wait until exchange rates are loaded.");
      return;
    }

    if (amount === "") {
      alert("Please enter an amount to convert.");
      return;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const result = convertCurrency(parseFloat(amount), fromRate, toRate);
    setConvertedValue(result);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Currency Converter
        </h1>

        <InputField
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />

        <CurrencySelector
          label="From Currency"
          selectedCurrency={fromCurrency}
          onChange={setFromCurrency}
          options={currencies}
        />

        <CurrencySelector
          label="To Currency"
          selectedCurrency={toCurrency}
          onChange={setToCurrency}
          options={currencies}
        />

        <button
          onClick={handleConvert}
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
        >
          Convert
        </button>

        <ConvertedValueDisplay value={convertedValue} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
