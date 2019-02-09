import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import CategoryHero from "../ui-components/category-view/CategoryHero";
import ExploreGroups from "../ui-components/category-view/ExploreGroups";

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
    let groupList = this.state.category.groups.map(group => {
      return (
        <Link key={group.id} to={{pathname: `/groups/${group.id}`, state: {group}}} style={{ textDecoration: 'none' }}>
          <div >{group.name}</div>
        </Link>        
      )
    })

    return (
      <>
        {/* <div>
          <h1>{this.state.category.name}</h1>
          <h2>{groupList}</h2>
        </div> */}
        <CategoryHero />
        <ExploreGroups />
      </>
    );
  }
}

export default CategoryView;