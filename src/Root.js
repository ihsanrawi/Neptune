import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { initSnoowrap } from "./actions/snoowrap";
import Loading from './components/Loading'
import App from './App';

class Root extends Component {
  componentDidMount = () => {
    this.props.createSnoowrapper();
  }
  
  render() {
    const {loading} = this.props;

    if(loading){
      return <Loading type='fullscreen'/>
    }

    return <App />;
  }
}

Root.propTypes = {
  loading: PropTypes.bool.isRequired,
  createSnoowrapper: PropTypes.func.isRequired
};

const mapStateToProps = ({snoowrap}) => {
  return {
    loading: snoowrap.loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSnoowrapper: () => {
      dispatch(initSnoowrap());
    }
  }
};

export default withRouter(
  connect (
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
