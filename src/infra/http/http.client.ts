const API_KEY = '87909682e6cd74208f41a6ef39fe4191';

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
};

const get = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });
  return (await response.json()) as T;
};

export const http = {
  get,
};
