import axiosClient from './axiosClient';

export async function getProvincesStatistic() {
  try {
    const res = await axiosClient.get(`/provinces_statictis`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
