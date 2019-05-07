import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

const Listitem = props => {
  return (
    <View style={styles.listitemContainer}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          backgroundColor: "#05a5d1",
          color: "white",
          paddingTop: 5,
          paddingBottom: 20
        }}
      >
        Items
      </Text>
      <View style={styles.table}>
        <View style={styles.headers}>
          <View style={styles.nameHeader}>
            <Text style={{ fontWeight: "bold", color: "#05a5d1" }}>Name</Text>
          </View>
          <View style={styles.nameHeader}>
            <Text style={{ fontWeight: "bold", color: "#05a5d1" }}>Price</Text>
          </View>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false}>
          {props.data.map((data, key) => (
            <View key={key} style={styles.datas}>
              <View>
                <Text style={styles.nameDatas}>{data[0]}</Text>
              </View>
              <View>
                <Text style={styles.nameDatas}> ₹{data[1]}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

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
    color: "white"
  }
});
