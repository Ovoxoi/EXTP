import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "@/constants/colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryButton = () => {
  return (
    <View>
      <Text style={Styles.title}>Categories</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity onPress={() => {}} style={Styles.categoryBtn}>
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={colors.black}
            />
            <Text>{item.title} </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.black,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default CategoryButton;
