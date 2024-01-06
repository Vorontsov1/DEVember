import React from "react";
import { View, Text, Button } from "react-native";
import { Stack, Link } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <Text>DayDetailsScreen</Text>

      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
