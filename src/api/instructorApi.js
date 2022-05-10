import api from "./api.js";
import axios from "axios";

export const findInstructors = async () => {
  return await axios
    .get(`${api}items/instructor`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
