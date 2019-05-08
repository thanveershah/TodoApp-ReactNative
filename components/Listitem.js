import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableNativeFeedback
} from "react-native";

class Listitem extends Component {
  delItem = (data, key) => {
    this.props.deleteItem(data, key);
  };

  render() {
    return (
      <View style={styles.listitemContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            backgroundColor: "#05a5d1",
            color: "white",
            paddingTop: 15,
            paddingBottom: 20
          }}
        >
          Expenses
        </Text>

        <View style={styles.table}>
          <View style={styles.headers}>
            <View style={styles.nameHeader}>
              <Text style={{ fontWeight: "bold", color: "#05a5d1" }}>Name</Text>
            </View>
            <View style={styles.nameHeader}>
              <Text style={{ fontWeight: "bold", color: "#05a5d1" }}>
                Price
              </Text>
            </View>
          </View>

          <ScrollView showsHorizontalScrollIndicator={false}>
            {this.props.data.map((data, key) => (
              <View key={key} style={styles.datas}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.nameDatas}>{data[0]}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <Text style={styles.priceDatas}>₹{data[1]} </Text>
                    <TouchableNativeFeedback
                      onPress={() => this.delItem(data, key)}
                    >
                      <View
                        style={{ flex: 0.2, position: "relative", right: 30 }}
                      >
                        <Text style={styles.deleteBtn}>X</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Listitem;

const styles = StyleSheet.create({
  listitemContainer: {
    backgroundColor: "#077796",
    overflow: "hidden",
    paddingBottom: 80,
    height: 440
  },
  headers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -15
  },
  datas: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  nameHeader: {
    backgroundColor: "white",
    padding: 8,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 3
  },
  nameDatas: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  priceDatas: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    flex: 1,
    paddingLeft: 30
  },
  deleteBtn: {
    color: "#05a5d1",
    fontWeight: "bold",
    borderRadius: 100,
    borderRadius: 500,
    textAlign: "center",
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "white"
  }
});
