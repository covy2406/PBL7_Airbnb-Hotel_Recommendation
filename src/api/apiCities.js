import axiosClient from './axiosClient';

export async function getCities() {
  try {
    const response = await axiosClient.get(`/cities`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}