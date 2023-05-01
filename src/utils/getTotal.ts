export const getTotal = (array: { sell: number; name: string }[]) => {
  return array.reduce((total, item) => total + item.sell, 0);
};

export const getfilterBookTotal = (
  array: { sell: number; name: string }[],
  type: "gyanGanga" | "jeeneKiRah"
) => {
  return getTotal(array.filter((item) => item.name === type));
};