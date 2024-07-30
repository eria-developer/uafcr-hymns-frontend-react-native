import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../app/shared/Colors";
import { useRouter } from "expo-router";

const profile = () => {
  const navigation = useRouter();
  const forYouHymns = [
    {
      id: 1,
      name: "Ayi Mukama",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/1517871183341-MDLGOWKI9AQTOBYPJL8O/chris-barbalis-457423.jpg?format=500w",
    },
    {
      id: 2,
      name: "Nsanyuka yesu yandokola",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/bb2ecc0a-b1e3-46dc-aab7-ce6136c6131f/Advent+Hymns+Album.png?format=300w",
    },
    {
      id: 3,
      name: "Tuwereze omuliro gwo",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/1499979331189-180RBJEN0F5ZQAZVXPB6/krisjanis-mezulis-57743.jpg?format=500w",
    },
    {
      id: 4,
      name: "Bwanampiita",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/1498678874546-F0Q7JA2DJ1O560PCHI6O/clem-onojeghuo-128598.jpg?format=750w",
    },
    {
      id: 5,
      name: "Akagombe",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/1498672480766-AELIIDMSZ588HHDRQFSK/kristina-flour-185602.jpg?format=750w",
    },
  ];
  return (
    <SafeAreaView
      style={{ marginTop: 40, backgroundColor: "lightgray", flex: 1 }}
    >
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s",
            }}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Text>Talemwa Eria Jackson</Text>
          <Text>eriddeveloper@gmail.com</Text>
        </View>

        {/* Recently liked hymns  */}
        <View
          style={{
            marginBottom: 10,
            marginHorizontal: 15,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 26 }}>Recently liked hymns</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("favorites")}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 15,
              backgroundColor: Colors.blue,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={forYouHymns}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Image
                    source={{
                      uri: item.imageUrl,
                    }}
                    resizeMode="cover"
                    style={styles.topHymnImage}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <Text>Loving Hymn</Text>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="favorite-outline"
                  size={24}
                  color={Colors.red}
                />
              </View>
            </View>
          )}
          style={{ marginHorizontal: 15 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    paddingTop: 80,
  },

  topHymnImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
