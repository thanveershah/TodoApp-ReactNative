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
  Animated
} from "react-native";
export default class Listitem extends Component {
  render() {
    return (
      <View style={styles.listitemContainer}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Items</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.props.data.map(data => (
            <View key={data}>
              <Text>{data}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listitemContainer: {
    // backgroundColor: "orange",
    height: 440
  }
});
