import api from "./api.js";
import axios from "axios";

export const findPhrases = async () => {
  return await axios
    .get(`${api}items/catchphrase`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
