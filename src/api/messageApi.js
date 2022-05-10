import api from "./api.js";
import axios from "axios";

export const contact = async (credentials) => {
  return await axios
    .post(`${api}items/message`, credentials)
    .then((data) => data)
    .catch((err) => console.log(err.response));
};
