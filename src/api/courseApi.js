import api from "./api.js";
import axios from "axios";

export const getAllCourses = async () => {
  return await axios
    .get(`${api}items/course`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};

export const findCourse = async (id) => {
  return await axios
    .get(`${api}items/course/${id}`)
    .then(({ data }) => data.data)
    .catch((err) => console.log(err.response));
};
