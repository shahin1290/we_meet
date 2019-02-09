import React, { Component } from "react";
import { Card, Box } from "tailwind-react-ui";
import axios from "axios";
import { Link } from 'react-router-dom';


class ExploreGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    this.getGroups();
  }

  async getGroups() {
    const response = await axios.get("http://localhost:3000/groups")
    const groups = response.data.groups
    this.setState({ groups });
  }

  render() {
    let groups = this.state.groups;
    let groupsList = groups.map(group => {
      return (
        <Box key={group.id} inlineBlock style={{marginBottom:"20px"}}>
          <Link to={{pathname: `/groups/${group.id}`, state: {group}}} style={{ textDecoration: 'none' }}>
            <Card
              className="card category-card"
              key={group.id}
              border
              shadow
              maxW="sm"
            >
              <div>
                <img src={group.image_url || `./assets/images/${group.name.toLowerCase()}.png`} />
              </div>
            </Card>
            <div className="category-name">{group.name}</div>
          </Link>
        </Box>
      );
    });

    return (
      <div className="category-container">
        <h1 className="category-header">Explore categories</h1>
        {groupsList}
      </div>
    );
  }
}

export default ExploreGroups;
