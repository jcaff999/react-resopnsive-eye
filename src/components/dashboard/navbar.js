import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavHashLink } from 'react-router-hash-link';
import {IconButton} from '@material-ui/core';
import Flag from 'react-flagkit';
import { TranslateAction } from "../../actions/translateAction";

import JsonData1 from '../layout/data/data_en.json';
import JsonData2 from '../layout/data/data_fr.json';
import JsonData3 from '../layout/data/data_it.json';
import JsonData4 from '../layout/data/data_pt.json';
import JsonData5 from '../layout/data/data_es.json';

export class Navigation extends Component {

  state = {
    landingPageData: {},
  }

  getlandingPageData(flag) {
    switch (flag){
      case "1" : 
        return this.setState({landingPageData : JsonData1})
      case "2" : 
        return this.setState({landingPageData : JsonData2})
      case "3" : 
        return this.setState({landingPageData : JsonData3})
      case "4" : 
        return this.setState({landingPageData : JsonData4})
      case "5" : 
        return this.setState({landingPageData : JsonData5})
      default:
        return null;
}
}

componentWillMount  () {
  console.log(this.state.landingPageData)
  console.log(this.props.translator.translateFlag)
  this.getlandingPageData(this.props.translator.translateFlag);
}

componentWillReceiveProps(nextProps){
  // this check makes sure that the getDashboardStats action is not getting called for other prop changes
  if(this.props.translator.translateFlag !== nextProps.translator.translateFlag){ 
    this.getlandingPageData(nextProps.translator.translateFlag);
  }
}
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
      ChangeLanguage = (flag)=>dispatch=>{
        this.props.TranslateAction(flag);
        console.log(this.props.translator.translateFlag)
      }
  render() {

    const { user } = this.props.auth;
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a href = "/" >
                  <img src = "/eyelogo.png" alt = "eyelogo" style = {{width: "69px", marginRight: "70px"}} />
                </a>
                <IconButton onClick = {this.ChangeLanguage("1")}>
                  <Flag country="US"/>
                </IconButton>
                <IconButton onClick = {this.ChangeLanguage("2")}>
                  <Flag country="FR"/>
                </IconButton>
                <IconButton onClick = {this.ChangeLanguage("3")}>
                  <Flag country="IT"/>
                </IconButton>
                <IconButton onClick = {this.ChangeLanguage("4")}>
                  <Flag country="PT"/>
                </IconButton>
                <IconButton onClick = {this.ChangeLanguage("5")}>
                  <Flag country="ES"/>
                </IconButton>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              
              <li>
                <NavHashLink to  = "/dashboard" className="page-scroll">
                    {this.state.landingPageData ? this.state.landingPageData.LoginedNavbar.patients : "loading"}
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to  = "/buy-space" className="page-scroll">
                    {this.state.landingPageData ? this.state.landingPageData.LoginedNavbar.buySpace : "loading"}
                </NavHashLink>
              </li>
              <li>
                <a className="page-scroll">
                  {user.name.split(" ")[0]}
                </a>
              </li>
              <li onClick={this.onLogoutClick}>
                <a className="page-scroll">
                  {this.state.landingPageData ? this.state.landingPageData.LoginedNavbar.logout : "loading"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    translator: state.translator
  });

export default connect(
    mapStateToProps,
    { logoutUser, TranslateAction }
  )(Navigation);
