import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Text, Fade } from '../components';
import { actions, getDucks, getStatus } from '../store/duck';

function Screen({ loadDucks }) {
  useEffect(() => {
    // Dispatch action when component mounts
    loadDucks();
  }, []);

  return (
    <Fade style={styles.container}>
      <Text typography="display2" style={styles.welcome}>
        Welcome!
      </Text>
      <Text typography="body" style={styles.body}>
        If you can see this you&apos;re ready to start your amazing project!
      </Text>
      <Text typography="headline" style={styles.thanks}>
        Thanks for using our boilerplate!
      </Text>
    </Fade>
  );
}

/*
  This is how you should connect your components to redux's state.
  When not accessing any redux's state properties don't connect to
  avoid needless calls.
*/

const mapStateToProps = state => ({
  status: getStatus(state),
  ducks: getDucks(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontWeight: 'bold'
  },
  body: {
    alignSelf: 'center',
    textAlign: 'center'
  },
  thanks: {
    marginTop: 10,
    fontWeight: 'bold'
  }
});
