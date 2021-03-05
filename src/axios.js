import axios from "axios";

const instance = axios.create({
  baseURL: "https://uditsolutions.in/wedding-mogache/public/api/",
});

export default instance;
