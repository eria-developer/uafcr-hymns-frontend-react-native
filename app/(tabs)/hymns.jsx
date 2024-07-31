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
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../shared/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import SearchBar from "../components/SearchBar";

const hymns = () => {
  const [hymns, setHymns] = useState([]);
  const [filteredHymns, setFilteredHymns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useRouter();

  // fetching all tasks
  const fetchHymns = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://backend-for-uafcr-hymns.onrender.com/api/hymns/hymns/"
      );
      setHymns(response.data.data);
      setFilteredHymns(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hymns!!", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  // end of fetching all tasks

  // fetching tasks basing on the search query
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setFilteredHymns(hymns);
    } else {
      const filtered = hymns.filter((hymn) =>
        hymn.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredHymns(filtered);
    }
  };
  // end of fetching filtered tasks

  const handleViewHymn = async (hymnId) => {
    navigation.push(`/hymnDetails/${hymnId}`);
  };

  // fetching hymns only on beginning of application
  useEffect(() => {
    fetchHymns();
  }, []);
  // end of fetching hymns

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleViewHymn(item.id)}>
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
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>Loving Hymn</Text>
          </View>
        </View>
        <View>
          <MaterialIcons name="favorite-outline" size={24} color={Colors.red} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar value={searchQuery} onChangeText={handleSearch} />
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size={"large"} color={Colors.blue} />
        ) : (
          <FlatList
            style={{ marginHorizontal: 10 }}
            data={filteredHymns}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
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
  topHymnImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },

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
