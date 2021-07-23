export const uniqueArray = (arr) => {
  return [...new Set(arr.map(JSON.stringify))].map(JSON.parse);
};
