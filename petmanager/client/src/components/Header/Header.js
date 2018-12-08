import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="title"
              />
            </a>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              href="/"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-item">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-success"
                    type="text"
                    placeholder="Text input"
                    value="bulma"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user" />
                  </span>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <a class="navbar-item" href="/">
                Home
              </a>

              <a class="navbar-item" href="/">
                Documentation
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/">
                  More
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item" href="/">
                    Find People
                  </a>
                  <a class="navbar-item" href="/">
                    Messages
                  </a>
                  <a class="navbar-item" href="/">
                    My Contacts
                  </a>
                </div>
              </div>
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary" href="/">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light" href="/">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
