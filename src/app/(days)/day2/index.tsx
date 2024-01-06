import React from 'react';
import { View, Text, Button } from "react-native";
import { Stack, Link } from "expo-router";



const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text>DayDetailsScreen</Text>

      <Link href="/day2/onboarding" asChild>
        <Button title="Go to Onboarding" />
      </Link>
    </View>
  );
}

export default DayDetailsScreen;
