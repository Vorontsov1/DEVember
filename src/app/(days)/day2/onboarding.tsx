import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Stack, Link, router} from "expo-router";
import { useState } from "react";
import { FontAwesome5, } from "@expo/vector-icons"; 


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
    const [screenIndex, setScreenIndex ] = useState(0);
    const data = onboardingSteps[screenIndex];
    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1
        if (isLastScreen) {
            endOnBoarding();
        } else {
            setScreenIndex(screenIndex + 1)
        }
    }; 

    


    const endOnBoarding = () => {
        setScreenIndex(0);
        router.back();
  }

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContent}>
        <FontAwesome5
          style={styles.image}
          name={data.icon}
          size={100}
          color="#FFDA11"
        />
        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>

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
    </SafeAreaView>
  );
}



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
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
      padding: 12,
      borderRadius: 50,
      alignItems: 'center',
    flex: 1,
  },
  buttonText: {
      color: "#FDFDFD",
      fontFamily: 'InterSemi',
      fontSize: 16,
      padding: 8,
      paddingHorizontal: 25,
  },
});


export default OnboardingScreen;
