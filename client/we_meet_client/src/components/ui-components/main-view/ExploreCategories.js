import React, { Component } from "react";
import { Card, Box } from "tailwind-react-ui";
import axios from "axios";
import { Link } from 'react-router-dom';


class ExploreCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const response = await axios.get("http://localhost:3000/categories")
    const categories = response.data.categories
    this.setState({ categories });
  }

  render() {
    let categories = this.state.categories;
    let categoriesList = categories.map(category => {
      return (
        <Box key={category.id} inlineBlock style={{marginBottom:"20px"}}>
          <Link to={{pathname: `/categories/${category.id}`, state: {category}}} style={{ textDecoration: 'none' }}>
            <Card
              className="card category-card"
              key={category.id}
              border
              shadow
              maxW="sm"
            >
              <div>
                <img src={category.image || `./assets/images/${category.name.toLowerCase()}.png`} />
              </div>
            </Card>
            <div className="category-name">{category.name}</div>
          </Link>
        </Box>
      );
    });

    return (
      <div className="category-container">
        <h1 className="category-header">Explore categories</h1>
        {categoriesList}
      </div>
    );
  }
}

export default ExploreCategories;
