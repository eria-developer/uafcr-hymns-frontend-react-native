import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HymnList from "../components/HymnList";
import SearchBar from "../components/SearchBar";

const hymns = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
        <ScrollView>
          <HymnList />
          <HymnList />
          <HymnList />
          <HymnList />
          <HymnList />
          <HymnList />
          <HymnList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default hymns;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
  },

  header: {
    marginTop: 40,
    marginHorizontal: 10,
  },
});
