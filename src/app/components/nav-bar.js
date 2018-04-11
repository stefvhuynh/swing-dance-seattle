import React from "react";
import PropTypes from "prop-types";
import { Link } from "redux-little-router";

import Icon from "./icon";

const linksPropType = PropTypes.arrayOf(
  PropTypes.shape({
    content: PropTypes.string,
    href: PropTypes.string
  })
);

const DesktopNavBar = ({ links }) => {
  return (
    <ul>
      {links.map(({ content, href }) => (
        <li key={href}><Link href={href}>{content}</Link></li>
      ))}
    </ul>
  );
};

DesktopNavBar.propTypes = {
  links: linksPropType
};

const MobileNavBar = ({ isOpen, links, onToggle }) => {
  return (
    <div>
      {isOpen && (
        <ul>
          {links.map(({ content, href }) => (
            <li key={href}><Link href={href}>{content}</Link></li>
          ))}
        </ul>
      )}
      <Icon name="bars" onClick={onToggle}/>
    </div>
  );
};

MobileNavBar.propTypes = {
  isOpen: PropTypes.bool,
  links: linksPropType,
  onToggle: PropTypes.func
};

const NavBar = (props) => {
  const { isMobile, ...navBarProps } = props;

  return isMobile
    ? <MobileNavBar {...navBarProps}/>
    : <DesktopNavBar {...navBarProps}/>;
};

NavBar.propTypes = {
  isMobile: PropTypes.bool,
  isOpen: PropTypes.bool,
  links: linksPropType,
  onToggle: PropTypes.func
};

export default NavBar;
