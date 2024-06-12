import axiosClient from './axiosClient';

// api lấy danh sách các thành phố có khách sạn
export async function getCities() {
  try {
    const response = await axiosClient.get(`/cities`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// api lấy danh sách các khách sạn của mỗi thành phố
// https://pbl7-be-nest.onrender.com/cities/1?page=1&count=10
export async function getHotelsById(id, page, count) {
  try {
    const response = await axiosClient.get(`/cities/${id}?page=${page}&count=${count}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}