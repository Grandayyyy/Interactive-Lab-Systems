import React from "react";

class Category extends React.Component {
  render() {
    return (
      <>
        {[...Array(this.props.category)].map((v, i) => (<i className="fas fa-star" key={i}></i>))}
        {[...Array(5 - this.props.category)].map((v, i) => (<i className="far fa-star" key={i}></i>))}
      </>
    );
  }
}

export default Category;
