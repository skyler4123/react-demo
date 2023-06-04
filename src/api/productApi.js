import axiosClient from "./axiosClient";

export const productApi = {
  index: (params) => {
    const url = '/posts';
    return axiosClient.get(url, { params })
  },
  show: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  }
}