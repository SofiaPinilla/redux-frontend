import axios from "axios";

const API_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts/getAll");
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(API_URL + "/posts/getById/" + id);
  return res.data;
};
const getByTitle = async (postName) => {
  const res = await axios.get(API_URL + "/posts/getByTitle/" + postName);
  return res.data;
};
const postsService = {
  getAll,
  getById,
  getByTitle
};

export default postsService;
