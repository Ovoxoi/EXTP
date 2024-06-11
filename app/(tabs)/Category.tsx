import { View, Text, StyleSheet } from "react-native";
import React from "react";

const category = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>category</Text>
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

export default category;
