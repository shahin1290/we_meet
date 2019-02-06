import React, { Component } from "react";
import { Card, Box } from "tailwind-react-ui";

class ExploreCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          name: "Tech",
          image: "./assets/images/tech.png"
        },
        {
          id: 2,
          name: "Food & Drink",
          image: "./assets/images/food.png"
        },
        {
          id: 3,
          name: "Sports & Fitness",
          image: "./assets/images/fitness.png"
        },
        {
          id: 4,
          name: "Family",
          image: "./assets/images/family.png"
        },
        {
          id: 5,
          name: "Music",
          image: "./assets/images/music.png"
        },
        {
          id: 6,
          name: "Outdoors & Adventure",
          image: "./assets/images/outdoors.png"
        }
      ]
    };
  }

  render() {
    let categories = this.state.categories;
    let categoriesList = categories.map(category => {
      return (
        <Box inlineBlock>
          <Card
            className="card"
            key={category.id}
            border
            shadow
            maxW="sm"
            style={{
              width: "314px",
              height: "200px",
              marginRight: "15px",
              marginBottom: "15px",
              backgroundColor: "#F1F5F8",
              textAlign: "Center"
            }}
          >
            <div>
              <img src={category.image} />
            </div>
          </Card>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#2e3e48",
              marginBottom: "1rem"
            }}
          >
            {category.name}
          </div>
        </Box>
      );
    });

    return (
      <div
        style={{ margin: "50px", paddingLeft: "8rem", paddingRight: "4rem" }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2e3e48",
            marginBottom: "1rem"
          }}
        >
          Explore categories
        </h1>
        {categoriesList}
      </div>
    );
  }
}

export default ExploreCategories;
