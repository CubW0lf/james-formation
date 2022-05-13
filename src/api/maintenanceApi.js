import api from "./api.js";
import axios from "axios";

export const findMaintenace = async (id) => {
  return await axios
    .get(`${api}items/maintenance/${id}`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
