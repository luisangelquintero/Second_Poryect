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

export const getNews = (path) => {
  let URL = "";
  switch (path) {
    case path.includes("search"):
      URL = `https://api.canillitapp.com${path}`;
      break;
    case path.includes("Internacionales"):
      URL = "https://api.canillitapp.com/news/2";
      break;
    case path.includes("Tecnologia"):
      URL = "https://api.canillitapp.com/news/3";
      break;

    default: {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const day = currentDate.getDate();
      URL = `https://api.canillitapp.com/latest/${year}-${month}-${day}`;
    }
  }

  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(URL)
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
