import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  AsyncStorage,
  TouchableNativeFeedback,
  Alert
} from "react-native";

class Totalprice extends Component {
  state = {
    toggle: false,
    isDisabled: true
  };

  handleToggle = () => {
    const { toggle, isDisabled } = this.state;
    this.setState({
      toggle: !toggle,
      isDisabled: !isDisabled
    });
  };

  clearItems = () => {
    Alert.alert(
      "Are you sure ?",
      "All the items will be deleted",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            await AsyncStorage.clear();
            await this.props.loadItems();
            this.setState({
              toggle: false,
              isDisabled: true
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { toggle, isDisabled } = this.state;
    return (
      <View style={styles.totalContainer}>
        <View>
          <Text>Total : 500</Text>
        </View>
        <View>
          <Switch
            thumbColor={toggle ? "#05a5d1" : "silver"}
            trackColor={{ true: "lightblue", false: "lightgrey" }}
            value={toggle}
            onValueChange={this.handleToggle}
          />
        </View>
        <View>
          <TouchableNativeFeedback
            onPress={this.clearItems}
            disabled={isDisabled}
          >
            <View style={styles.clearContainer}>
              <Text style={isDisabled ? styles.isdisable : styles.isenabled}>
                Clear
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default Totalprice;

const styles = StyleSheet.create({
  totalContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15
  },
  clearContainer: {
    backgroundColor: "transparent",

    borderColor: "#05a5d1"
  },
  isdisable: {
    color: "silver",
    fontSize: 18
  },
  isenabled: {
    color: "#05a5d1",
    fontSize: 18
  }
});
