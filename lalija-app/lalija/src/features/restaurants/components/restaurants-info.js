import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Resto",
    icon,
    photos = [
      "https://images.hola.com/imagenes/cocina/recetas/20230116224671/wok-pollo-thai/1-190-736/wok-pollo-age-t.jpg?tx=w_1200",
    ],
    address = "Rivera 1354 esq. LA de Herrera",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary,
  } = restaurant;
  return (
    <Card elevation={5} style={StyleSheet.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
