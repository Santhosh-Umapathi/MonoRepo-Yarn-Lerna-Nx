import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = { text: string };

const WelcomeScreen = (props: Props) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text>{"Welcome Screen" + text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
