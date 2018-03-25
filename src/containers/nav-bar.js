import { connect } from "react-redux";

import NavBar from "../components/nav-bar";
import { isMobile, isNavBarOpen } from "../redux/reducer";
import { navBarToggled } from "../redux/actions";

const mapStateToProps = (state) => ({
  isMobile: isMobile(state),
  isOpen: isNavBarOpen(state)
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: () => dispatch(navBarToggled())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
