import React from "react";
import { SafeAreaView, Button, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";

const description = `
# Animation splash screen`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Splachscreen" }} />

      <MarkDownDisplay markdownStyles={styles.markdownStyles}>
        {description}
      </MarkDownDisplay>

      <Link href="/day4/animation" asChild>
        <Button title="Go to animation" />
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  markdownStyles: {
    // Define your Markdown styles here
    heading1: {
      fontWeight: "bold",
    },
    // Add more styles as needed
  },
});

export default DayDetailsScreen;
