import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Keyboard
} from "react-native";

import Listitem from "./Listitem";

export default class componentName extends Component {
  state = {
    data: [],
    item: ""
  };

  handleInput = text => {
    this.setState({
      item: text
    });
  };

  addItem = () => {
    let { data, item } = this.state;
    let name = item;
    data.push(name);
    this.setState({
      data: data,
      item: ""
    });
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.addListContainer}>
        <StatusBar
          barStyle="default"
          hidden={false}
          backgroundColor="#772ea2"
          translucent={true}
        />
        <View>
          <Listitem data={this.state.data} />
        </View>
        <View style={styles.addItemContainer}>
          <Text style={styles.Header}>Add Items</Text>
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                style={styles.inputName}
                placeholder="Item Name"
                value={this.state.item}
                placeholderTextColor="silver"
                onChangeText={this.handleInput}
              />
            </View>
            <View>
              <TextInput
                style={styles.inputPrice}
                keyboardType="numeric"
                placeholder="Price"
                placeholderTextColor="silver"
              />
            </View>
          </View>
          <View style={styles.addBtnContainer}>
            {/* #005068 */}
            <TouchableNativeFeedback onPress={this.addItem}>
              <View style={styles.addBtn}>
                <Text style={styles.addBtnText}>Add</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    textAlign: "center",
    fontSize: 20
  },
  inputContainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputName: {
    width: 200,
    borderWidth: 1,
    padding: 5,
    borderColor: "silver",
    paddingLeft: 10
  },
  inputPrice: {
    width: 100,
    borderWidth: 1,
    padding: 5,
    borderColor: "silver",
    paddingLeft: 10
  },
  addBtnContainer: {
    paddingTop: 20
  },
  addBtn: {
    backgroundColor: "#05a5d1",
    padding: 10,
    borderRadius: 5
  },
  addBtnText: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 18
  }
});
