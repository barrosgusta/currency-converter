// Pure function to apply exchange rate and return converted value
export const convertCurrency = (
  amount: number,
  fromRate: number,
  toRate: number
): number => {
  return (amount / fromRate) * toRate;
};
