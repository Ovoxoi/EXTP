import { View, Text, StyleSheet } from "react-native";
import React from "react";

const search = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>search</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default search;
