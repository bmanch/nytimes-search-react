import React, { Component } from "react";
import {Link} from "react-router";
import helpers from "../utils/helpers";
import Query from "./grandchildren/Query";
import Results from "./grandchildren/Results";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      startYear: "",
      endYear: "",
      results: []
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
    // this.props.setTerm(this.state);

    let currentSearch = this.state;

    helpers.runQuery(currentSearch).then(data => {
      if (data !== this.state.results) {
        console.log(data);
        this.setState({ results: data });
      }
    });

    this.setState({
      searchTerm: "",
      startYear: "",
      endYear: ""
    });
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>   Search</strong></h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit} role="form">
              <div className="form-group">
                <label htmlFor="search-term">Search Term:</label>
                <input name="searchTerm" type="text" className="form-control" id="search-term" value={this.state.searchTerm} onChange={this.handleChange} />
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
            </form>
          </div>
        </div>

        <div className="row">
          <Results currentSearch={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Search;