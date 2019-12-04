import React, {
  useCallback,
  Fragment
} from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header';
import DepartDate from './DepartDate';
import Journey from './Journey';
import HighSpeed from './HighSpeed';
import Submit from './Submit';

function App(props) {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <Fragment>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <DepartDate/>
      <Journey/>
      <HighSpeed/>
      <Submit/>
    </Fragment>
  )
}

export default connect(
  function mapStateToProps(state) {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(App);