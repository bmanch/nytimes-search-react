import React from "react";

const Query = (props) => {
  return (
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
            <h3 className="panel-title"><strong><i className="fa fa-search"></i>   Your Recent Search</strong></h3>
          </div>
          <div className="panel-body">
            <h4>Search Term: {props.currentSearch.searchTerm}</h4>
            <h4>Number of Articles: {props.currentSearch.numArticles}</h4>
            <h4>Years: {`${props.currentSearch.startYear} - ${props.currentSearch.endYear}`}</h4>
          </div>
        </div>
      </div>
  );
}

export default Query;