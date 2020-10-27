import { connect } from "react-redux";
import { searchNews, getHomeNews, getNews } from "../actions";
import SearchMenu from "../components/SearchMenu";

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHomeNews: () => dispatch(getHomeNews()),
  searchNews: (word) => dispatch(searchNews(word)),
  onGetNews: (category) => dispatch(getNews(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
