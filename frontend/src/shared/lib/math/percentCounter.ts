export const percentCounter = <T>(
  min: string | number,
  max: string | number,
  value: string | number
) => {
  const min_N = Number(min);
  const max_N = Number(max);
  const value_N = Number(value);
  return ((value_N - min_N) / (max_N - min_N)) * 100 + "%";
};
