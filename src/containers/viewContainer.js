import { connect } from "react-redux";
import NewsSection from "../components/NewsSections";

const mapStateToProps = (state) => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

export default connect(mapStateToProps, null)(NewsSection);
