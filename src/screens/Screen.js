import React from 'react';
import {
  // StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import {} from '../components';
import { actions, getStatus, getDucks } from '../store/duck';

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
      <View>
        <Text>React Native Template by Ez Devs</Text>
        <Text>Author: Maykon Michel Palma</Text>
      </View>
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
