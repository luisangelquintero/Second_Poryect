import {
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  LOADING_SUCCESS,
  CLEAR_REPOS,
  SEARCH_FOR
} from "./actionsType";

export const loadingError = (bool) => ({
  type: LOADING_ERROR,
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: LOADING_IN_PROGRESS,
  isLoading: bool
});

export const loadingSuccess = (repos) => ({
  type: LOADING_SUCCESS,
  repos
});

export const clearRepos = () => ({
  type: CLEAR_REPOS
});

export const search = (e) => ({
  type: SEARCH_FOR,
  value: e.target.value
});

export const getNews = () => {
  const date = moment().format("YYYY-MM-DD");
  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/latest/${date}?page=1`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => response.slice(0, 10))
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getNewsByCategory = (category) => {
  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/latest/${category}?page=1`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => response.slice(0, 10))
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getNewsByWord = (word) => {
  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/search/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};
