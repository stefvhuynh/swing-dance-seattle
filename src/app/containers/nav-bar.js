import { connect } from "react-redux";

import NavBar from "../components/nav-bar";
import { selectIsMobile, selectIsNavBarOpen } from "../redux/selectors";
import { navBarToggled } from "../redux/actions";

const mapStateToProps = (state) => ({
  isMobile: selectIsMobile(state),
  isOpen: selectIsNavBarOpen(state)
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: () => dispatch(navBarToggled())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
