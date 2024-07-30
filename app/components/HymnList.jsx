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
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../shared/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";

const HymnList = () => {
  const [hymns, setHymns] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useRouter();

  const fetchHymns = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://backend-for-uafcr-hymns.onrender.com/api/hymns/hymns/"
      );
      setHymns(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hymns!!", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleViewHymn = async (hymnId) => {
    navigation.push(`/hymnDetails/${hymnId}`);
  };

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
                uri: "https://images.squarespace-cdn.com/content/v1/594c2a87d482e915c4aa15cc/1517871183341-MDLGOWKI9AQTOBYPJL8O/chris-barbalis-457423.jpg?format=500w",
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

  useEffect(() => {
    fetchHymns();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={"large"} color={Colors.blue} />
      ) : (
        <FlatList
          data={hymns}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          // scrollEnabled={false}
        />
      )}
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
