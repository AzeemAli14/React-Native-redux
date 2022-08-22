import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increase, decrease} from '../redux/ActionType';
import { Add, Remove } from '../redux/Actions';

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  // this.state = {
  //     count: 0
  // }
  // this.props = props;
  // this.state = {};
  // this   = props instanceof Component ? (this.props.props || {}) : this; }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => this.props.decreaseTheValue()}>
          -
        </Text>

        <Text style={styles.text}>{this.props.counter.value}</Text>

        <Text style={styles.text} onPress={() => this.props.increaseTheValue()}>
          +
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseTheValue: () => {
      dispatch(Add());
    },

    decreaseTheValue: () => {
      dispatch(Remove());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});
