import React from "react";

class Page extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { category } = this.props;
    return (
      <div>
        <h1>`hola desde las section ${category}` </h1>
      </div>
    );
  }
}

export default Page;
