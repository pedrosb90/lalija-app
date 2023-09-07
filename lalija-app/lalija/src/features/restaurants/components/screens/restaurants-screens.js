import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { RestaurantInfo, RestaurantInfoCard } from "../restaurants-info-card";
import { styled } from "styled-components/native";

const Title = styled.Text``;

export const RestaurantsScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>Bienvenido a LALIJA con mucho amor</Text>
    <View style={{ padding: 16, backgroundColor: "#35495e" }}>
      <Searchbar />
    </View>
    <View style={{ flex: 1, padding: 16, backgroundColor: "#ff7e67" }}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
});
