import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Colors from "../app/shared/Colors";

const BoardingPage = () => {
  const navigation = useNavigation();

  const handleButton = () => {
    navigation.navigate("(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: "https://uafcr.org/wp-content/uploads/2023/12/uafcrp-1.png",
          }}
          style={styles.myImage}
          resizeMode="cover"
        />

        <Text style={styles.myTitle}>UAFCR HYMNS</Text>

        <View style={styles.afterTitleTextContainer}>
          <Text style={styles.afterTitleText}>
            Explore and sing along hymns
          </Text>
        </View>

        <TouchableOpacity onPress={handleButton} style={styles.myButton}>
          <Text style={styles.buttonText}>Sing Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BoardingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },

  innerContainer: {
    alignItems: "center",
  },

  myImage: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },

  myButton: {
    backgroundColor: Colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  myTitle: {
    color: Colors.red,
    fontWeight: "bold",
    fontSize: 45,
    marginBottom: 10,
  },

  afterTitleText: {
    fontSize: 16,
    color: "#333",
  },

  afterTitleTextContainer: {
    marginBottom: 20,
  },
});
