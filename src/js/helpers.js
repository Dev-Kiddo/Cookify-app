export const getJSON = async function (url) {
  const res = await fetch(`${API_URL}/${url}`);
  const data = await res.json();
  return data;
};
