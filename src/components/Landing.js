import React, { Component } from 'react'

export default class Landing extends Component {

  render() {
    return (
      <div>
        <h1>This the Landing page</h1>
        <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
      </div>
    )
  }
}
