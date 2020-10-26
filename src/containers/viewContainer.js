import { connect } from "react-redux";
import { getNews, getNewsByCategory, getNewsByWord } from "../actions";
import NewsSection from "../components/NewsSections";

const mapStateToProps = (state) => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsDispacth: () => dispatch(getNews()),
  getNewsByCategoryDispacth: (category) => dispatch(getNewsByCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsSection);
