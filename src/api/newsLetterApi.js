import api from "./api.js";
import axios from "axios";

export const subscribe = async (email, fullName) => {
  return await axios
    .post(`${api}items/mail`, { email: email, fullname: fullName })
    .then((data) => data)
    .catch((err) => console.log(err.response));
};
