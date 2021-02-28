import React, { Component } from "react";
import {Link} from "react-router-dom"

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <Link to  = "/login"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    {this.props.data ? this.props.data.start : "Loading"}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
