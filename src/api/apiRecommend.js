//import axios from "axios";
import axiosClientRecommend from "./axiosClientRecommend";

// api gợi ý khách sạn khi người dùng đăng nhập
export async function getRecommend(user_id) {
  try {
    const response = await axiosClientRecommend.get(`/recommend?user_id=${user_id}`);
    console.log('in ra res recmd',response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
}

// api gợi ý khách sạn khi người dùng tìm kiếm
export async function getsearchRecommend(title) {
  try {
    const response = await axiosClientRecommend.get(`/search?title_substring=${title}`);
    console.log('in search', response.data)
    return response.data;
  } catch (err) {
    throw err;
  }
}
