import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: { id: state.reduxTokenAuth.currentUser.attributes.id }
  }
}

class UserProfileView extends Component {
  componentDidMount() {
    // Get the number from url
    debugger;
    console.log(this.props.currentUser)
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserProfileView);