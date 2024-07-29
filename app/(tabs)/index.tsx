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

const index = () => {
  const hymnCategories = [
    {
      id: 1,
      name: "Peaceful",
      imageUrl:
        "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      id: 2,
      name: "Loving",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/1517870180389-V4YWITSTO3B7TRU8D350/cristian-escobar-297114.jpg?format=500w",
    },

    {
      id: 3,
      name: "Prasing",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/1527455098928-FT74FSMS6QABAHVY56Q4/josh-applegate-470056-unsplash.jpg?format=500w",
    },
  ];

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
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

          {/* Discover new hymns section  */}
          <View style={styles.buttonContainer}>
            <View>
              <Text style={{ fontSize: 26, color: Colors.black }}>
                Discover new hymns
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.myButton}>
                <Text style={{ color: "#fff" }}>Explore</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <FlatList
              data={hymnCategories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: item.imageUrl,
                    }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <Text style={styles.centeredText}>{item.name}</Text>
                </View>
              )}
              numColumns={3}
            />
          </View>
          {/* End of discover new hymns section  */}

          {/* For you section  */}
          <View style={styles.buttonContainer}>
            <View>
              <Text style={{ fontSize: 26, color: Colors.black }}>For you</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.myButton}>
                <Text style={{ color: "#fff" }}>Browse</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <FlatList
              data={forYouHymns}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.forYouImageContainer}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={{ color: Colors.red }}>{item.name}</Text>
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {/* End of for you section  */}

          {/* Top hymns section  */}
          <View style={styles.buttonContainer}>
            <View>
              <Text style={{ fontSize: 26, color: Colors.black }}>
                Top hymns
              </Text>
            </View>
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
                    <Text style={{ fontSize: 18 }}>
                      Nsanyuka yesu yandokola
                    </Text>
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
                    <Text style={{ fontSize: 18 }}>
                      Nsanyuka yesu yandokola
                    </Text>
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

          {/* end of top hymns section  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
  },

  headerContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 25,
  },

  smallText: {
    fontSize: 15,
  },

  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  myButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: Colors.red,
    borderRadius: 7,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  imageContainer: {
    position: "relative",
    width: Dimensions.get("window").width * 0.3, // Adjust width as needed
    height: 100,
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10, // Optional: for rounded corners
    opacity: 1,
  },
  centeredText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: -50 }, // Adjusted to numeric value
      { translateY: -50 }, // Adjusted to numeric value
    ],
    color: "#fff", // Text color
    fontSize: 20, // Font size
    fontWeight: "bold", // Text weight
    textAlign: "center", // Center text horizontally
  },

  forYouImageContainer: {
    width: Dimensions.get("window").width * 0.57, // Adjust width as needed
    height: 70,
    marginRight: 10,
    marginTop: 10,
  },

  topHymnImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
