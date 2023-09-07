import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { RestaurantInfo, RestaurantInfoCard } from "../restaurants-info-card";
import { styled } from "styled-components/native";

const SearchbarView = styled.View`
  padding: 16px;
  background-color: #35495e;
`;

const RestoView = styled.View`
  alignitems: center;
  justifycontent: center;
  flex: 1;
  padding: 16px;
  background-color: #ff7e67;
`;

export const RestaurantsScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>Bienvenido a LALIJA con mucho amor</Text>
    <SearchbarView>
      <Searchbar />
    </SearchbarView>
    <RestoView>
      <RestaurantInfoCard />
    </RestoView>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {},
});
