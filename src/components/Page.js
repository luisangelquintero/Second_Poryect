import React from "react";

class Page extends React.Component {
  componentDidMount() {
    const { getHomeNews, location, onGetNews } = this.props;
    getHomeNews(location.pathname);
  }

  componentDidUpdate(prevProps) {
    const oldPath =
      this.props.location.pathname !== prevProps.location.pathname;
    if (oldPath) {
      this.props.getHomeNews(this.props.location.pathname);
    }
  }

  render() {
    const { repos, hasError, isLoading, getHomeNews } = this.props;
    console.log(repos);
    if (hasError) {
      return (
        <div className="container">
          <h6>Error al buscar los repos.</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container">
          <div class="d-flex justify-content-center">
            <div class="spinner spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {repos.map((repo) => (
          <h6>{repo.title}</h6>
        ))}
      </div>
    );
  }
}

export default Page;
