import { View, Text, FlatList } from "react-native";
import React from "react";

type Props={
    listings: any[]
}

const Listings = ({listings}:Props) => {
    const renderItems =()
  return (
    <View>
       <FlatList data={listings} renderItem={renderItems}/>
    </View>
  );
};

export default Listings;
