import { combineReducers } from "redux";
import {
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  LOADING_SUCCESS,
  CLEAR_REPOS
} from "../actions/actionsType";

const loadingError = (state = false, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case "LOADING_IN_PROGRESS":
      return action.isLoading;
    default:
      return state;
  }
};

const repos = (state = [], action) => {
  switch (action.type) {
    case "LOADING_SUCCESS":
      return action.repos;
    case "CLEAR_REPOS":
      return [];
    default:
      return state;
  }
};

//Puede ser neceserario o no
const search = (value = "", action) => {
  switch (action.type) {
    case "SEARCH_FOR":
      return action.value;
    default:
      return value;
  }
};
export default combineReducers({
  repos,
  loadingError,
  loadingInProgress,
  search
});
