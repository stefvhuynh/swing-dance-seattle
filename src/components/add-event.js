import React from "react";
import PropTypes from "prop-types";

import {
  CATEGORY_LIST,
  EMPTY_TYPE,
  RECURRENCE_DAY_LIST,
  RECURRENCE_TIME_LIST
} from "../constants";
import Select from "./select";

export default class AddEvent extends React.Component {
  static propTypes = {
    onEventSubmit: PropTypes.func,
    submissionSucceeded: PropTypes.bool
  };

  state = {
    category: EMPTY_TYPE,
    date: "",
    isRecurring: false,
    link: "",
    name: "",
    neighborhood: "",
    recurrenceDay: EMPTY_TYPE,
    recurrenceTime: EMPTY_TYPE
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = () => {
    const { onEventSubmit } = this.props;

    if (onEventSubmit) {
      onEventSubmit({ ...this.state });
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
      neighborhood,
      recurrenceDay,
      recurrenceTime
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
          <Select
            name="category"
            onChange={this.handleInputChange}
            value={category}
            options={CATEGORY_LIST}
          />
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

        {isRecurring ? (
          <label>
            Date
            <Select
              name="recurrenceTime"
              onChange={this.handleInputChange}
              value={recurrenceTime}
              options={RECURRENCE_TIME_LIST}
            />
            <Select
              name="recurrenceDay"
              onChange={this.handleInputChange}
              value={recurrenceDay}
              options={RECURRENCE_DAY_LIST}
            />
          </label>
        ) : (
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
        )}

        <button onClick={this.handleSubmit}>Submit</button>

        {submissionSucceeded && <div>Event successfully submitted!</div>}
      </div>
    );
  }
}
