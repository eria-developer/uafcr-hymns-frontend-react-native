import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../shared/Colors";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="search hymn..."
          style={{ paddingVertical: 5, paddingHorizontal: 10 }}
          placeholderTextColor={Colors.blue}
        />
      </View>
      <View>
        <Ionicons name="search-circle" size={36} color={Colors.blue} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    marginVertical: 20,
  },

  searchBar: { flex: 1, backgroundColor: "gray", borderRadius: 10 },
});
