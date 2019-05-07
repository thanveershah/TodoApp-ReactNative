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
    let valueTotal = await AsyncStorage.getItem("Total");
    this.setState({
      data: JSON.parse(value) || [],
      total: JSON.parse(valueTotal) || 0
    });
  };

  addItem = () => {
    const { data, item, price, total } = this.state;
    let name = item;
    let money = parseInt(price);
    data.push([name, money]);
    let newTotal = total + money;
    this.setState({
      data: data,
      item: "",
      price: "",
      total: newTotal
    });
    this.saveItems(data);
    this.saveTotal(newTotal);
    console.log(data);

    Keyboard.dismiss();
  };

  saveTotal = total => {
    const saveItem = AsyncStorage.setItem("Total", JSON.stringify(total));
  };

  saveItems = newItem => {
    const saveItem = AsyncStorage.setItem("ToDos", JSON.stringify(newItem));
  };

  clearTotal = () => {
    this.setState({
      total: 0
    });
  };

  render() {
    return (
      <View style={styles.addListContainer}>
        <View>
          <Listitem data={this.state.data} />
        </View>

        <Totalprice
          loadItems={this.loadItems}
          total={this.state.total}
          clearTotal={this.clearTotal}
        />
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
