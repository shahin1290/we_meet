import React, { Component } from "react";
import axios from "axios";

class CategoryView extends Component {
  constructor(props) {
    super(props);
    this.state = { category: {
      name: '',
      groups: []
    } };
  }

  componentDidMount() {
    // Get the number from url
    let id =  this.props.location.state.category.id;
    this.getCategory(id);
  }

  async getCategory(id) {
    const response = await axios.get(`http://localhost:3000/categories/${id}`);
    const category = response.data.category;
    this.setState({ category });
  }


  render() {
    return (
      <div>
        <h1>{this.state.category.name}</h1>
        <h2>{this.state.category.groups.map(item => {
            return <div key={item.id}>{item.name}</div>
          })}</h2>
      </div>
    );
  }
}

export default CategoryView;