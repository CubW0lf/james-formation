import api from "./api.js";
import axios from "axios";

export const findAbout = async (id) => {
  return await axios
    .get(`${api}items/about/${id}`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
