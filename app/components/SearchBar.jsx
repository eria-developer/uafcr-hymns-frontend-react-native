import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../shared/Colors";

const SearchBar = ({ value, onChangeText }) => (
  <View style={styles.searchBarContainer}>
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search hymn..."
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholderTextColor={Colors.blue}
      />
    </View>
    <TouchableOpacity>
      <Ionicons name="search-circle" size={36} color={Colors.blue} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },

  searchBar: {
    flex: 1,
    backgroundColor: "gray",
    borderRadius: 10,
  },

  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#000", // Ensure text color is readable
  },
});

export default SearchBar;
