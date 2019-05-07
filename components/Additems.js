import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  AsyncStorage
} from "react-native";

import Listitem from "./Listitem";
import Totalprice from "./Totalprice";

export default class componentName extends Component {
  state = {
    data: [],
    item: "",
    price: "",
    total: 0
  };

  handleInput = text => {
    this.setState({
      item: text
    });
  };

  handlePrice = val => {
    this.setState({
      price: val
    });
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = async () => {
    let value = await AsyncStorage.getItem("ToDos");
    this.setState({
      data: JSON.parse(value) || []
    });

    return value;
  };

  addItem = () => {
    let { data, item, price } = this.state;
    let name = item;
    let money = parseInt(price);
    data.push([name, money]);
    this.setState({
      data: data,
      item: "",
      price: ""
    });
    this.saveItems(data);
    console.log(data);

    Keyboard.dismiss();
  };

  saveItems = newItem => {
    const saveItem = AsyncStorage.setItem("ToDos", JSON.stringify(newItem));
  };

  render() {
    return (
      <View style={styles.addListContainer}>
        <View>
          <Listitem data={this.state.data} />
        </View>

        <Totalprice loadItems={this.loadItems} />
        <View style={styles.addItemContainer}>
          {/* <Text style={styles.Header}>Add Items</Text> */}
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
                placeholder="Price"
                keyboardType="numeric"
                value={this.state.price}
                onChangeText={this.handlePrice}
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
  addItemContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },

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
