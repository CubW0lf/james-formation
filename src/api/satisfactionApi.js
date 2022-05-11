import api from "./api.js";
import axios from "axios";

export const findPercent = async () => {
  return await axios
    .get(`${api}items/satisfaction`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
