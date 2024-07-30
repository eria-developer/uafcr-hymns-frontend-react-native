import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const toTitleCase = (str) => {
  if (typeof str !== "string") {
    return ""; // Return an empty string if input is not a valid string
  }

  return str
    .split(" ") // Split the string into words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter and lowercase the rest
    )
    .join(" "); // Join the words back into a single string
};

const HymnDetails = ({ route, navigation }) => {
  const [hymn, setHymn] = useState("");
  const { id } = useLocalSearchParams();
  // const id = 5;

  const fetchHymn = async () => {
    try {
      const response = await axios.get(
        `https://backend-for-uafcr-hymns.onrender.com/api/hymns/hymn/${id}`
      );
      setHymn(response.data.data);
    } catch (error) {
      console.error("Error fetching hymn", error);
    }
  };

  useEffect(() => {
    console.log("Fetching hymn with ID:", id);
    fetchHymn();
  }, [id]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.title}>
          {hymn.number}. {toTitleCase(hymn.title || "")}{" "}
          {/* Default to empty string if hymn.title is undefined */}
        </Text>
        <Text style={styles.lyrics}>{hymn.lyrics}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
  },
  containerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  lyrics: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "justify",
    letterSpacing: 0.5,
  },
});

export default HymnDetails;
