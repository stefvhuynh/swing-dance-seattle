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
    category: "",
    date: "",
    isRecurring: false,
    link: "",
    name: "",
    neighborhood: ""
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = () => {
    const { onEventSubmit } = this.props;
    const { category, date, link, name, neighborhood } = this.state;

    if (onEventSubmit) {
      onEventSubmit({
        category,
        date,
        link,
        name,
        neighborhood
      });
    }
  };

  render() {
    const { submissionSucceeded } = this.props;
    const {
      category,
      date,
      isRecurring,
      link,
      name,
      neighborhood
    } = this.state;

    return (
      <div className="flex-column">
        Add an Event

        <label>
          Event Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Category
          <select
            id="event-category"
            name="category"
            onChange={this.handleInputChange}
            value={category}
          >
            {CATEGORIES.map((eventCategory) => (
              <option key={eventCategory} value={eventCategory}>
                {capitalize(eventCategory)}
              </option>
            ))}
          </select>
        </label>

        <label>
          Link
          <input
            type="text"
            name="link"
            value={link}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Neighborhood
          <input
            type="text"
            name="neighborhood"
            value={neighborhood}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Recurring
          <input
            type="checkbox"
            name="isRecurring"
            checked={isRecurring}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Date
          <span className="italic">(Format: mm/dd/yyyy)</span>
          <input
            type="text"
            name="date"
            value={date}
            onChange={this.handleInputChange}
          />
        </label>

        <button onClick={this.handleSubmit}>Submit</button>

        {submissionSucceeded && <div>Event successfully submitted!</div>}
      </div>
    );
  }
}
