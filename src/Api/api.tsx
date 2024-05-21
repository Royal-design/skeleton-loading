import axios from "axios";

const delay = () => new Promise<void>((res) => setTimeout(() => res(), 1800));
export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const endpoint = "/users";

export const getUsers = async () => {
  await delay();
  const response = await api.get(endpoint);
  return response.data;
};
