import axios from "axios";

// const nyTimesApiKey = process.env.NY_API;

const nyTimesApiKey = "2034e48040bb4dee84ced6351fbf9a74";

const helpers = {
  runQuery: (searchObject) => {
    // console.log(searchObject);

    // let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nyTimesApiKey}`;

    // if (searchObject.startYear !== "" && searchObject.endYear !== "") {
    //   url += `&q=${searchObject.searchTerm}&begin_date=${searchObject.startYear}0101&end_date=${searchObject.endYear}0101`
    // } else {
    //   url += `&q=${searchObject.searchTerm}`
    // }

    // console.log("Query Run");

    // return axios.get(url).then((response) => {
    //   console.log(response);
    //   let trunc = response.data.response.docs;
    //   let resArray = [];

    //   for (let i = 0; i < searchObject.numArticles; i++) {
    //     let resObject = {
    //       title: trunc[i].headline.main,
    //       date: trunc[i].pub_date,
    //       url: trunc[i].web_url
    //     };

    //     resArray.push(resObject);
    //   }

    //   console.log(resArray);

    //   return resArray;
    // });

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
      console.log(results);
      let trunc = results.data.response.docs;
      console.log(typeof trunc);
      let resArray = [];

      for (let i = 0; i < 10; i++) {
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