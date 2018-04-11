import React from "react";
import PropTypes from "prop-types";

import Experience from "./experience";

const ExperienceList = ({ experiences }) => {
  const listItems = experiences.map((experience) => {
    return (
      <li key={experience.id} className="border-bottom border-light-grey">
        <Experience {...experience}/>
      </li>
    );
  });

  return <ul className="shadow">{listItems}</ul>;
};

ExperienceList.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape(Experience.propTypes))
};

export default ExperienceList;
