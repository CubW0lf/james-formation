import api from "./api.js";
import axios from "axios";

export const findInfos = async (id) => {
  return await axios
    .get(`${api}items/infos/${id}`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
