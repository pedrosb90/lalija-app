import { StatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Bienvenido a LALIJA con mucho amor</Text>
      </View>
      <View style={{ padding: 16, backgroundColor: "#35495e" }}>
        <Searchbar />
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "#ff7e67" }}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
});
