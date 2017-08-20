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

  handleClick(title, date, url) {
    console.log("clicked");
    let saveObject = {
      title,
      date,
      url
    };

    console.log(saveObject);

    helpers.saveArticle(saveObject).then(data => {
      console.log(data);
      
      this.setState({
        title,
        date,
        url
      });

      alert("This article has been saved.");
    });
  }

  render() {
    if (this.props.currentSearch.length === 0) {
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
            {this.props.currentSearch.map((search, i) => {
              return (
                <div key={i}>
                  <div className="row">
                    <div className="col-sm-8">
                      <h4>{i + 1}.   {search.title}</h4>
                      <p>Published: {search.date.slice(0, 10)}</p>
                      <a href={search.url} target="_blank">Go to the article</a>
                    </div>
                    <div className="col-sm-4 text-right">
                      <button onClick={() => this.handleClick(search.title, search.date, search.url)} className="btn btn-warning"><i className="fa fa-bookmark-o" aria-hidden="true"></i> Save</button>
                    </div>
                  </div>
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