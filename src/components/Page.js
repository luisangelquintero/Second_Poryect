import React from "react";
import "./stylespage.css";

class Page extends React.Component {
  componentDidMount() {
    const { getHomeNews, location } = this.props;
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
    const { repos, hasError, isLoading } = this.props;

    if (hasError) {
      return (
        <div className="container">
          <h2>
            <i class="fas fa-sad-cry"></i>Error al buscar los repos, intenta con
            otra palabra.<i class="fas fa-sad-cry"></i>
          </h2>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container">
          <div class="d-flex justify-content-center">
            <div class="spinner spinner-border text-primary" role="status">
              <span class="sr-only">
                <i class="fas fa-sad-cry"></i>Loading...
              </span>
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
                <h3>
                  {" "}
                  <i class="fas fa-file-export"></i> Categoria: {repo.category}
                </h3>
                <h3>
                  <i class="fas fa-newspaper"></i> Medio: {repo.source_name}
                </h3>
              </div>
              <a href={repo.url} className="btn btn-light news" target="blank">
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
