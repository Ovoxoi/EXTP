import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import colors from "@/constants/colors";

const CategoryButton = () => {
  return (
    <View>
      <Text style={Styles.title}>Categories</Text>
      <ScrollView></ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.black,
  },
});

export default CategoryButton;
