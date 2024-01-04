import { View, Text, StyleSheet } from "react-native";

type DayListItem = {
    day: number;
}

const DayListItem = ({ day }: DayListItem) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
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
    fontFamily: 'AmaticBold',
  },
});

export default DayListItem;

