import axiosClient from './axiosClient';

export async function getCities() {
  try {
    const response = await axiosClient.get(`/cities`);
    return response.data;
  } catch (error) {
    throw error;
  }
}