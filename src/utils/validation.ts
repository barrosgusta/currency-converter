// Pure function for validating numeric and positive input
export const isPositiveNumber = (value: string): boolean => {
  const number = parseFloat(value);
  return !isNaN(number) && number > 0;
};
