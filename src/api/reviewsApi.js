import api from "./api.js";
import axios from "axios";

export const findReviews = async () => {
  return await axios
    .get(`${api}items/review`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
