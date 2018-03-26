import React from "react";
import PropTypes from "prop-types";

import { CATEGORIES } from "../constants";
import { capitalize } from "../utils";

export default class AddEvent extends React.Component {
  static propTypes = {
    onEventSubmit: PropTypes.func,
    submissionSucceeded: PropTypes.bool
  };

  state = {
    date: "",
    link: "",
    name: "",
    neighborhood: "",
    selectedCategory: ""
  };

  handleInputChange = (stateKey, event) => {
    this.setState({ [stateKey]: event.target.value });
  }

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  }

  handleSubmit = () => {
    const { onEventSubmit } = this.props;
    const { date, link, name, neighborhood, selectedCategory } = this.state;

    if (onEventSubmit) {
      onEventSubmit({
        date,
        link,
        name,
        neighborhood,
        category: selectedCategory
      });
    }
  }

  render() {
    const { submissionSucceeded } = this.props;
    const { date, link, name, neighborhood, selectedCategory } = this.state;

    return (
      <div>
        Add an Event

        <div>
          <label htmlFor="eventName">Event Name</label>
          <input
            id="eventName"
            type="text"
            value={name}
            onChange={this.handleInputChange.bind(this, "name")}
          />
        </div>

        <div>
          <label htmlFor="eventCategory">Category</label>
          <select onChange={this.handleCategoryChange} value={selectedCategory}>
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
              >
                {capitalize(category)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="eventLink">Link</label>
          <input
            id="eventLink"
            type="text"
            value={link}
            onChange={this.handleInputChange.bind(this, "link")}
          />
        </div>

        <div>
          <label htmlFor="eventLink">Neighborhood</label>
          <input
            id="eventNeighborhood"
            type="text"
            value={neighborhood}
            onChange={this.handleInputChange.bind(this, "neighborhood")}
          />
        </div>

        <div>
          <label htmlFor="eventDate">Date</label>
          <div className="italic">(Format: mm/dd/yyyy)</div>
          <input
            id="eventDate"
            type="text"
            value={date}
            onChange={this.handleInputChange.bind(this, "date")}
          />
        </div>

        <button onClick={this.handleSubmit}>Submit</button>

        {submissionSucceeded && <div>Event successfully submitted!</div>}
      </div>
    );
  }
}
