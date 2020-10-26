import { connect } from "react-redux";
import { getNews, getNewsByCategory, getNewsByWord } from "../actions";
import SearchMenu from "../components/SearchMenu";

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsDispacth: () => dispatch(getNews()),
  getNewsByCategoryDispacth: (category) =>
    dispatch(getNewsByCategory(category)),
  getNewsByWordDispacth: (word) => dispatch(getNewsByWord(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
