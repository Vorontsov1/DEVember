import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

const days = [...Array(24)].map((val, index) => index +1);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
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

  box: {
    backgroundColor: "#f4d2b7",
    flex: 1, 
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#b65a41",
    borderRadius: 20,
  },
  text: {
    color: "#b65a41",
    fontSize: 70,
  },
});
