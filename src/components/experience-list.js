import React from "react";
import PropTypes from "prop-types";

const ExperienceList = ({ experiences }) => {
  const listItems = experiences.map((experience) => {
    return (
      <li key={experience.id}>{experience.name}</li>
    );
  });

  return <ul>{listItems}</ul>;
};

ExperienceList.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object)
};

export default ExperienceList;
