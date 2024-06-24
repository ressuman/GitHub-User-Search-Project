import axios from "axios";

// const token = import.meta.env.VITE_ACCESS_TOKEN
const url = import.meta.env.VITE_REACT_GITHUB_USER_ACCESS_API_URL;

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${url}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// get repo
export const getRepos = async (username) => {
  try {
    const response = await axios.get(`${url}/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user repos:", error);
    throw error;
  }
};
