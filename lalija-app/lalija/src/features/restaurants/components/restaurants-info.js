import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "Some Resto",
    icon,
    photos = [
      "https://images.hola.com/imagenes/cocina/recetas/20230116224671/wok-pollo-thai/1-190-736/wok-pollo-age-t.jpg?tx=w_1200",
    ],
    address = "Rivera 1354 esq. LA de Herrera",
    isOpenNow = true,
    rating,
    isClosedTemporary,
  } = restaurant;
  return <Text>Info</Text>;
};
