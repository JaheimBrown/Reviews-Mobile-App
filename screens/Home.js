import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontTxt}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  fontTxt: {
    fontFamily: "PoppinsBold",
    fontSize: 64,
  },
});

export default Home;
