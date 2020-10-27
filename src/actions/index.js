import {
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  LOADING_SUCCESS,
  CLEAR_REPOS,
  SEARCH_FOR
} from "./actionsType";

export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingSuccess = (repos) => ({
  type: "LOADING_SUCCESS",
  repos
});

export const clearRepos = () => ({
  type: "CLEAR_REPOS"
});

export const search = (e) => ({
  type: "SEARCH_FOR",
  value: e.target.value
});

export const getHomeNews = (path) => {
  let URL = "";
  if (path.includes("search")) {
    URL = `https://api.canillitapp.com${path}`;
  }
  if (path.length < 6) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    URL = `https://api.canillitapp.com/latest/${year}-${month}-${day}`;
  }

  if (path.includes("Internacionales")) {
    URL = "https://api.canillitapp.com/news/category/2";
  }
  if (path.includes("Tecnologia")) {
    URL = "https://api.canillitapp.com/news/category/3";
  }
  if (path.includes("Espectaculos")) {
    URL = "https://api.canillitapp.com/news/category/4";
  }
  if (path.includes("Deportes")) {
    URL = "https://api.canillitapp.com/news/category/5";
  }
  if (path.includes("Diseno")) {
    URL = "https://api.canillitapp.com/news/category/6";
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
      .then((response) => response.slice(0, 10))
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};
