import axiosClient from "./axiosClient";

export async function Recommend(user_id) {
  try {
    const response = await axiosClient.get(`/recommend/${user_id}`);
    return response.data;
  } catch(err) {
    throw err;
  }
}