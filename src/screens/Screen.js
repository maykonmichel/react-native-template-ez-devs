import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Text, Button, Fade } from '../components';
import { actions, getDucks, getStatus } from '../store/duck';

class Screen extends React.Component {
  // state = {};

  componentDidMount() {
    const { loadDucks } = this.props;
    loadDucks();
  }

  render() {
    // const {
    //   status,
    //   ducks,
    // } = this.props;
    // const {} = this.state;

    return (
      <Fade>
        <Text>React Native Template by Ez Devs</Text>
        <Text>Author: Maykon Michel Palma</Text>
        <Button title="Button" />
      </Fade>
    );
  }
}

const mapStateToProps = state => ({
  status: getStatus(state),
  ducks: getDucks(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);

// const styles = StyleSheet.create({});
