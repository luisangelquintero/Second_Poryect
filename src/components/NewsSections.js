import React from "react";

class NewsSection extends React.Component {
  render() {
    const { category } = this.props;
    return <h1>`hola desde las section ${category}`</h1>;
  }
}
export default NewsSection;
