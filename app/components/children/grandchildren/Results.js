import React from "react";

class Results extends React.Component {
  render() {
    return (
      <div className="col-sm-8">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Your Search Results</strong></h3>
          </div>
          <div className="panel-body">
            <h4>Results...</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;