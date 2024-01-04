import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import DayListItem from "./src/components/core/DayListItem";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';
import {AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';


SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index +1);

export default function App() {
 const [fontsLoaded, fontError] = useFonts({
   Inter: Inter_900Black,
   Amatic: AmaticSC_400Regular,
   AmaticBold: AmaticSC_700Bold,
 });
  
  useEffect(() => {
     if (fontsLoaded || fontError) {
       SplashScreen.hideAsync();
     }
  }, [fontsLoaded, fontError]);
  
  if (!fontsLoaded && !fontError) { 
    return null;
  }
 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  column: {
    gap: 10,
  },

  content: {
    gap: 10,
    padding: 10,
  },
});
