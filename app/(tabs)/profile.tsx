import { View, Text, StyleSheet } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>profile</Text>
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

export default profile;
