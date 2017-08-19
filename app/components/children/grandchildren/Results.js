import React, { Component } from "react";
import helpers from "../../utils/helpers";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      url: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    console.log("clicked");
    console.log(item);

    helpers.saveArticle(item).then(data => {
      console.log(data);
    });
  }

  render() {
    if (!this.props.results) {
      return (
        <div className="col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading text-center">
              <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Your Search Results</strong></h3>
            </div>
            <div className="panel-body text-center">
              <em> Enter search terms to begin...</em>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Your Search Results</strong></h3>
          </div>
          <div className="panel-body">
            {props.currentSearch.map((search, i) => {
              return (
                <div key={i}>
                  <h4>{i + 1}.   {search.title}</h4>
                  <p>Published: {search.date.slice(0, 10)}</p>
                  <a href={search.url}>Go to the article       </a>
                  <button onClick={props.saveArticle(search.title, search.date, search.url)} className="btn btn-warning"><i className="fa fa-bookmark-o" aria-hidden="true"></i> Save</button>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;