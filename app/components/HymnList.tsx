import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../shared/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HymnList = () => {
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
    <View>
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
                <Text style={{ fontSize: 18 }}>Nsanyuka yesu yandokola</Text>
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
      />
    </View>
  );
};

export default HymnList;

const styles = StyleSheet.create({
  topHymnImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
