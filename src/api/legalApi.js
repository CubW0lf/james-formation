import api from "./api.js";
import axios from "axios";

export const findLegal = async (id) => {
  return await axios
    .get(`${api}items/legal/${id}`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
