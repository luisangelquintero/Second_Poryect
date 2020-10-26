import React from "react";

class News extends React.Component {
  componentDidMount() {
    const { getNews, location, repos } = this.props;
    getNews(location.pathname);
    console.log(repos);
  }

  render() {
    const { repos, hasError, isLoading } = this.props;

    if (hasError) {
      return (
        <div className="container">
          <h6>Error al buscar las noticias.</h6>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className="container">
          <h6>Cargando...</h6>
        </div>
      );
    } else {
      return <h1>paila</h1>;
    }
  }
}

export default News;
