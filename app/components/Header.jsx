import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerText}>Welcome to UAFCR-Hymns</Text>
        <Text style={styles.smallText}>Guest User</Text>
      </View>
      <View>
        <Image
          source={require("../../assets/images/icon.png")}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 25,
  },
});
