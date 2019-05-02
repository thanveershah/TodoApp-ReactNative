import React, { Component } from "react";
import Additems from "./components/Additems";
import { StyleSheet, View, KeyboardAvoidingView, Animated } from "react-native";

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.MainContainer}>
        <Additems />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFFF",
    flex: 1,
    justifyContent: "center"
  }
});
