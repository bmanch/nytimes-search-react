import React, { Component } from "react";
import helpers from "../utils/helpers";

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedArticles: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    helpers.getArticles().then(articles => {
      this.setState({ savedArticles: articles.data });
    });
  }

  handleClick(item) {
    helpers.deleteArticle(item).then(response => {
      helpers.getArticles().then(articles => {
        this.setState({ savedArticles: articles.data });
      });
    });
  }

  render() {
    if (this.state.savedArticles.length === 0) {
      return (
        <div className="col-sm-12 text-center">
          <div className="panel panel-primary">
            <div className="panel-heading text-center">
              <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
            </div>
            <div className="panel-body text-center">
              <em>No articles saved. Save an article and see it here!</em>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
          </div>
          <div className="panel-body">
            {this.state.savedArticles.map((article, i) => {
              return (
                <div key={i}>
                  <div className="row">
                    <div className="col-sm-8">
                      <h4>{i + 1}.   {article.title}</h4>
                      <p>Published: {article.date.slice(0, 10)}</p>
                      <a href={article.url} target="_blank">Go to the article</a>
                    </div>
                    <div className="col-sm-4 text-right">
                      <button onClick={() => this.handleClick(article.url)} className="btn btn-danger">Delete</button>
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

export default Saved;