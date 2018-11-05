import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { actionCreators as homeActionCreators } from '../../ducks/home';
import Home from './home';

function mapStateToProps(state) {
/* EXAMPLE:
   const { user } = state.auth;
   return { user };
 */
}

function mapDispatchToProps(dispatch) {
/* EXAMPLE:
   onAuth: bindActionCreators(homeActionCreators.doSomething, dispatch)
*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);