import React, { Component } from "react";
import {Link} from "react-router";
import Saved from "./children/Saved";
import Search from "./children/Search";
import helpers from "./utils/helpers";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      numArticles: "",
      startYear: "",
      endYear: "",
      results: []
    };

    this.setTerm = this.setTerm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      helpers.runQuery(this.state).then(data => {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(term) {
    this.setState({
      searchTerm: term.searchTerm,
      numArticles: term.numArticles,
      startYear: term.startYear,
      endYear: term.endYear
    });
  }

  saveArticle(title, date, url) {
    let articleObject = {
      title,
      date,
      url
    }
    console.log("main", articleObject);
    helpers.saveArticle(articleObject);
  }

  render() {

    const clonedChildren = React.cloneElement(this.props.children, {
      setTerm: this.setTerm,
      saveArticle: this.saveArticle,
      currentSearch: this.state
    });

    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1><i className="fa fa-newspaper-o fa-1x" aria-hidden="true"></i>  Now and Then News</h1>
          <p><em>you pick the topic, we'll get the articles</em></p>
        </div>

        <div className="row text-center" id="doubleButtons">
          <div className="col-sm-6" id="searchBox">
            <Link to="/Search"><button className="btn btn-success btn-lg">Search for Articles</button></Link>
          </div>
          <div className="col-sm-6" id="savedBox">
            <Link to="/Saved"><button className="btn btn-warning btn-lg">Saved Articles</button></Link>
          </div>
          <br />
          <br />
        </div>

        <div className="row">
          {clonedChildren}
        </div>
      </div>
    );
  }
}

export default Main;