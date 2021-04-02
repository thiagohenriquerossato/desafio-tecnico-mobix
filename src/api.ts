import axios from "axios";

const api = axios.create({
  baseURL: "https://anapioficeandfire.com/api",
});

const apiChar = axios.create({
  baseURL: "",
});

export { api, apiChar };
