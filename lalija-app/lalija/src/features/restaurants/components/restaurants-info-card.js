import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: grey;
`;
const RestoCard = styled(Card)`
  background-color: white;
`;

const RestoCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Wok de Pedro",
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
    <RestoCard elevation={5}>
      <RestoCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestoCard>
  );
};
