import api from "./api.js";
import axios from "axios";

export const findCompanies = async () => {
  return await axios
    .get(`${api}items/company`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
