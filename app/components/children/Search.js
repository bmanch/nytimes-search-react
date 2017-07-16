import React from "react";
import {Link} from "react-router";
import Query from "./grandchildren/Query";
import Results from "./grandchildren/Results";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      numArticles: "5",
      startYear: "",
      endYear: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setTerm(this.state);
    this.setState({
      searchTerm: "",
      numArticles: "5",
      startYear: "",
      endYear: ""
    });
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search</strong></h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit} role="form">
              <div className="form-group">
                <label htmlFor="search-term">Search Term:</label>
                <input name="searchTerm" type="text" className="form-control" id="search-term" value={this.state.searchTerm} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="num-records-select">Number of Records to Retrieve:</label>
                <select name="numArticles" className="form-control" id="num-records-select" value={this.state.numArticles} onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input name="startYear" type="text" className="form-control" id="start-year" value={this.state.startYear} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input name="endYear" type="text" className="form-control" id="end-year" value={this.state.endYear} onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
            </form>
          </div>
        </div>

        <div className="row">
          <Query currentSearch={this.props.currentSearch} />
          <Results />
        </div>
      </div>
    );
  }
}

export default Search;