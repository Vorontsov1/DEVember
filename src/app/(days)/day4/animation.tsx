import React, {useRef} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { Stack } from 'expo-router';

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        ref={animation}
        style={{
            width: '80%',
            maxWidth: 700,
          height: 200,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/lottie/netflix.json")}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.playButton]}
          onPress={() => animation.current?.play()}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pauseButton]}
          onPress={() => animation.current?.pause()}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={() => animation.current?.reset()}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  playButton: {
    backgroundColor: "#4CAF50", // Green color
  },
  pauseButton: {
    backgroundColor: "#FFC107", // Yellow color
  },
  resetButton: {
    backgroundColor: "#E50914", // Red color
  },
  buttonText: {
      color: "#FFFFFF",
      fontWeight: 'bold',
      fontSize: 18,
  },
});
export default AnimationScreen;