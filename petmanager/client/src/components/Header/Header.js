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
                    placeholder="Search"
                    value=""
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-search" />
                  </span>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <a class="navbar-item" href="/">
                <div class="control has-icons-left has-icons-right">
                  <i class="fas fa-search fa-fw" />
                  &nbsp;Find People
                </div>
              </a>
              <a class="navbar-item" href="/">
                <div class="control has-icons-left has-icons-right">
                <i class="fas fa-envelope fa-fw" />
                  &nbsp;Messages
                </div>
              </a>
              <a class="navbar-item" href="/">
                <div class="control has-icons-left has-icons-right">
                <i class="fas fa-address-book fa-fw" />
                  &nbsp;My Contacts
                </div>
              </a>

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
