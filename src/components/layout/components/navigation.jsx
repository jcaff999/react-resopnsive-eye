import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import Flag from 'react-flagkit';
import {IconButton} from '@material-ui/core';
import { connect } from "react-redux";
import { TranslateAction } from "../../../actions/translateAction";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export class Navigation extends Component {
  ChangeLanguage = (flag)=>dispatch=>{
    this.props.TranslateAction(flag);
  }
  render() {
    return (
      <AppBar
        color="white"
        position="static"
        elevation={0}
        className="overflow-hidden flex flex-row items-center flex-shrink h-48 md:h-64 min-h-48 md:min-h-64 px-12"
      >
      <Toolbar>
        <div className="flex flex-1 mx-8">
            <a href = "/" >
              <img src = "/eyelogo.png" alt = "eyelogo" style = {{width: "69px", marginRight: "10px"}} />
          </a>
        </div>
        <div>
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

        <div className="nav navbar-nav" style = {{marginRight:0}}>
          <li>
            <NavHashLink to = "#about" className="page-scroll">
              {this.props.data ? this.props.data.about : 'loading...'}
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to ="#portfolio" className="page-scroll">
              {this.props.data ? this.props.data.gallery : 'loading...'}
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="#buy-space" className="page-scroll">
              Buy Space
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="#testimonials" className="page-scroll">
              {this.props.data ? this.props.data.testimonials : 'loading...'}
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="#contact" className="page-scroll">
              {this.props.data ? this.props.data.contact : 'loading...'}
            </NavHashLink>
          </li>
        </div>
      </Toolbar>

      </AppBar>      

    );
  }
}

const mapStateToProps = state => ({
  translator: state.translator,
});

export default connect(
  mapStateToProps, {TranslateAction}
)(withRouter(Navigation));
