import React from "react";
import "./stylespage.css";

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
          <h2>Error al buscar los repos.</h2>
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
      <div className="newscontainer">
        {repos.map((repo) => (
          <div className="news-card">
            <div className="news-card-left">
              <img src={repo.img_url} alt={repo.title} />
            </div>

            <div className="news-card-right">
              <h2>{repo.title}</h2>
              <div>
                <h3> Categoria: {repo.category}</h3>
                <h3>Medio: {repo.source_name}</h3>
              </div>
              <a href={repo.url} className="btn btn-light news" target="_blank">
                VER MÁS
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Page;
