import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/constants/colors";
import { useHeaderHeight } from "@react-navigation/elements";
import search from "./search";
import CategoryButton from "@/components/CategoryButton";

const index = () => {
  const headerheight = useHeaderHeight();
  const [categor, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    console.log("Category:", category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginRight: 20 }}>
              <Image
                source={{
                  uri: "https://www.flaticon.com/fr/icone-gratuite/femme_4086699?term=avatars&related_id=4086699",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.Container, { paddingTop: headerheight }]}>
        <Text style={styles.headeingTxt}>Explore the beautiful world</Text>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={colors.black}
            />
            <TextInput placeholder=" Search...." />
          </View>
          <TouchableHighlight onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={colors.white} />
          </TouchableHighlight>
        </View>

        <CategoryButton onCategoryChanged={onCatChanged} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.bgColor,
  },
  headeingTxt: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});

export default index;
