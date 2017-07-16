import axios from "axios";

const helpers = {
  getArticles: () => {
    return axios.get("/api/retrieve");
  },

  saveArticles: () => {
    return axios.post("api/save");
  }
};