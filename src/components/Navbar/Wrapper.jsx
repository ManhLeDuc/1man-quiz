import React, { Component } from 'react';
import CustomNavBar from './CustomNavbar';

import { authenticationService } from '../../services/authentication.service';
import { authHeader } from '../../helpers';

export default class Wrapper extends Component {

  state = {
    email: "",
    name: "",
    url: "",
    login: false,
  }

  componentDidMount() {
    if (authenticationService.currentUserValue) {
      fetch(`https://guarded-oasis-70016.herokuapp.com/api/me`, {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',

      })
        .then((res) => { return res.json(); })
        .then((data) => {
          if (data.name) {
            this.setState({
              login: true,
              email: data.email,
              name: data.name,
              url: data.avatarUrl
            });
          }
          else {
            this.setState({
              login: false,
              email: "",
              name: "",
              url: ""
            })
            authenticationService.logout();
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }

  }

  render() {
    return (
      <CustomNavBar login={this.state.login} username={this.state.name} url={this.state.url} email={this.state.email}></CustomNavBar>
    )
  }
}
