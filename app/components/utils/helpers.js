import axios from "axios";

const nyTimesApiKey = process.env.NY_API;

const helpers = {
  runQuery: (searchObject) => {

    let term = searchObject.searchTerm.trim();
    let start = `${searchObject.startYear.trim()}0101`;
    let end = `${searchObject.endYear.trim()}1231`;

    console.log("Query Run");

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": nyTimesApiKey,
        "q": term,
        "begin_date": start,
        "end_date": end
      }
    }).then(results => {
      
      let trunc = results.data.response.docs;
      let resArray = [];

      for (let i = 0; i < trunc.length; i++) {
        let resObject = {
          title: trunc[i].headline.main,
          date: trunc[i].pub_date,
          url: trunc[i].web_url
        };

        resArray.push(resObject);
      }

      return resArray;

    }).catch(function(error) {

      console.log(error);
      return null;

    });
  },

  getArticles: () => {
    return axios.get("/api/retrieve").then(results => {
      console.log("retrieval results", results);
      return results;
    });
  },

  saveArticle: (articleObject) => {
    return axios.post("/api/save", articleObject).then(response => {
      console.log("axios saved article", response.data._id);
      return response.data._id;
    });
  },

  deleteArticle: (url) => {
    return axios.delete("/api/remove", {
      params: {
        "url": url
      }
    }).then(results => {
      console.log("axios delete results", results);
      return results;
    }).catch(function(error) {
      console.log(error);
      return null;
    });
  }
};

export default helpers;