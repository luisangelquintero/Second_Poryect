import { connect } from "react-redux";
import { getHomeNews, getNews } from "../actions";
import Page from "../components/Page";

const mapStateToProps = (state) => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});
const mapDispatchToProps = (dispatch) => ({
  getHomeNews: (path) => dispatch(getHomeNews(path)),
  onGetNews: (category) => dispatch(getNews(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
