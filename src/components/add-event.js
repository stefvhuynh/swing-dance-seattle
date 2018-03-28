import React from "react";
import PropTypes from "prop-types";

import {
  CATEGORY_LIST,
  EMPTY_TYPE,
  RECURRENCE_DAY_LIST,
  RECURRENCE_TIME_LIST
} from "../constants";
import {
  isDateStartBeforeDateEnd,
  isRecurringCategory,
  isValidDate,
  isValidTime
} from "../utils";
import Select from "./select";

export default class AddEvent extends React.Component {
  static propTypes = {
    onEventSubmit: PropTypes.func,
    submissionSucceeded: PropTypes.bool
  };

  state = {
    category: EMPTY_TYPE,
    dateEnd: "",
    dateStart: "",
    isInvalid: false,
    link: "",
    name: "",
    neighborhood: "",
    recurrenceDay: EMPTY_TYPE,
    recurrenceTime: EMPTY_TYPE,
    time: "",
    venue: ""
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = () => {
    const { onEventSubmit } = this.props;
    const isValid = this.areDetailsValid();

    if (isValid && onEventSubmit) {
      const { isInvalid, ...details } = this.state;
      onEventSubmit(details);
    }

    this.setState({ isInvalid: !isValid });
  };

  areDetailsValid() {
    const {
      category,
      dateEnd,
      dateStart,
      link,
      name,
      neighborhood,
      recurrenceDay,
      recurrenceTime,
      time,
      venue
    } = this.state;

    const isRecurring = isRecurringCategory(category);

    return category !== EMPTY_TYPE
      && (
        !isRecurring
          ? isValidDate(dateEnd) && isDateStartBeforeDateEnd(dateStart, dateEnd)
          : true
      )
      && (!isRecurring ? isValidDate(dateStart) : true)
      && link
      && name
      && neighborhood
      && (isRecurring ? recurrenceDay !== EMPTY_TYPE : true)
      && (isRecurring ? recurrenceTime !== EMPTY_TYPE : true)
      && (time ? isValidTime(time) : true)
      && venue;
  }

  renderMessage() {
    if (this.state.isInvalid) {
      return <div>Details are invalid!</div>;
    } else if (this.props.submissionSucceeded) {
      return <div>Submission succeeded!</div>;
    }
  }

  render() {
    const {
      category,
      dateEnd,
      dateStart,
      link,
      name,
      neighborhood,
      recurrenceDay,
      recurrenceTime,
      time,
      venue
    } = this.state;

    const isRecurring = isRecurringCategory(category);

    return (
      <div className="flex-column">
        Add an Event

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
          Event Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Venue
          <input
            type="text"
            name="venue"
            value={venue}
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
          Link
          <input
            type="text"
            name="link"
            value={link}
            onChange={this.handleInputChange}
          />
        </label>

        {isRecurring ? (
          <label>
            Recurrence
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
          <div>
            Date Range <span className="italic">Format: MM/DD/YYYY</span>
            <label>
              Start
              <input
                type="text"
                name="dateStart"
                value={dateStart}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              End
              <input
                type="text"
                name="dateEnd"
                value={dateEnd}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
        )}

        <label>
          Time <span className="italic">Format: HH:MM(a/p)m</span>
          <input
            type="text"
            name="time"
            value={time}
            onChange={this.handleInputChange}
          />
        </label>

        <button onClick={this.handleSubmit}>Submit</button>

        {this.renderMessage()}
      </div>
    );
  }
}
