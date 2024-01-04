import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import DayListItem from "../../src/components/core/DayListItem";


const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {


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
