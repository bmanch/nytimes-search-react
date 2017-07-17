import React from "react";

const Results = props => {
    return (
      <div className="col-sm-8">
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

export default Results;