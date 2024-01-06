import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Stack, Link, router } from "expo-router";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  BounceInLeft,
  BounceInRight,
  FlipInEasyX,
  FlipOutEasyX,
  SlideInRight,
  SlideOutLeft,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";





const onboardingSteps = [
  {
    icon: "credit-card",
    title: "Payments for any business",
    description:
      "From e-commerce store to subscription businesses - we offer a complete stack for all your payments needs across channels",
  },
  {
    icon: "balance-scale",
    title: "Optimise your revenue",
    description:
      "Protect yourself from fraaud and increase authorisation rates on every payment using our machine learning and data from millions of businesses",
  },
  {
    icon: "dollar-sign",
    title: "Scale globally",
    description:
      "With 135+ currencies and dozens of payment methods we make it easy to launch new markets",
  },
];

const OnboardingScreen = () => {

  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];


  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnBoarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

    const onBack = () => {
      const isFirstScreen = screenIndex === 0;
      if (isFirstScreen) {
        endOnBoarding();
      } else {
        setScreenIndex(screenIndex - 1);
      }
    };

  const endOnBoarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipeBack = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);
  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );
  

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index.toString()}
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? "#FFDA11" : "grey" },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View key={screenIndex} style={styles.pageContent}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color="#FFDA11"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight.duration(500)}
              exiting={SlideOutLeft.duration(500)}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInLeft.delay(50)}
              exiting={SlideOutRight.duration(500)}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnBoarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 18,
    flex: 1,
  },
  image: {
    alignSelf: "center",
      margin: 20,
    marginTop: 70,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "Inter",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "InterReg",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 8,
    paddingHorizontal: 25,
  },

  //   steps
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 10,
  },
    stepIndicator: {
        flex: 1,
        height: 5,
        backgroundColor: "grey",
        borderRadius: 10,
    },
});

export default OnboardingScreen;
