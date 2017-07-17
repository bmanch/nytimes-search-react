import axios from "axios";

const nyTimesApiKey = process.env.NY_API;

const helpers = {
  runQuery: (searchObject) => {
    console.log(searchObject);

    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nyTimesApiKey}`;

    if (searchObject.startYear !== "" && searchObject.endYear !== "") {
      url += `&q=${searchObject.searchTerm}&begin_date=${searchObject.startYear}0101&end_date=${searchObject.endYear}0101`
    } else {
      url += `&q=${searchObject.searchTerm}`
    }

    return axios.get(url).then((response) => {
      console.log(response);
      let trunc = response.data.response.docs;
      let resArray = [];

      for (let i = 0; i < searchObject.numArticles; i++) {
        let resObject = {
          title: trunc[i].headline.main,
          date: trunc[i].pub_date,
          url: trunc[i].web_url
        };

        resArray.push(resObject);
      }

      console.log(resArray);

      return resArray;
    });
  },

  getArticles: () => {
    return axios.get("/api/retrieve");
  },

  saveArticle: (articleObject) => {
    return axios.post("/api/save", articleObject);
  }
};

export default helpers;