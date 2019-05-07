import React, { Component } from "react";
import Additems from "./components/Additems";
import {
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  View
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.MainContainer}>
        <StatusBar hidden={true} backgroundColor="#42dcf4" translucent />

        <Additems />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#FFFF"
  }
});
