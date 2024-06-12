import axiosClient from "./axiosClient";

// api lấy tất cả các khách sạn
export async function getHotel(page, count) {
  try {
    const res = await axiosClient.get(`/hotels?page=${page}&count=${count}`);
    //console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

// api lấy chi tiết khách sạn
export async function getDetailHotel(id) {
  try {
    const res = await axiosClient.get(`/hotels/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}