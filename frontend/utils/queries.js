export const getTrybers = async () => {
  const res = await fetch('http://localhost:3001/trybers');
  const data = await res.json();
  return data;
};
