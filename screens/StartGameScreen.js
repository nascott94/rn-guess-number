import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default StartGameScreen;
