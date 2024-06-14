import axiosClient, { axiosAdmin } from './axiosClient';

export async function getProvincesStatistic() {
  try {
    const res = await axiosAdmin.get(`/provinces_statictis`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getRatingsStatistic() {
  try {
    const res = await axiosAdmin.get(`/ratings_statictis`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getScoresStatistic() {
  try {
    const res = await axiosAdmin.get(`/scores_statictis`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPriceStatistic() {
  try {
    const res = await axiosAdmin.get(`/prices_statictis`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUsersStatistic(page, size) {
  try {
    const res = await axiosClient.get(`/users`, {
      params: {
        page: page,
        count: size,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
