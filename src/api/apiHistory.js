import axiosClient from "./axiosClient";

// api lấy lịch sử xem khách sạn của user
export async function getHistory(page, count) {
  try {
    const res = await axiosClient.get(`/hotel-viewed/user-historys?page=${page}&count=${count}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}