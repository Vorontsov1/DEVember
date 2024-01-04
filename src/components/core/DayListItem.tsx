import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from 'expo-router';


type DayListItem = {
    day: number;
}

const DayListItem = ({ day }: DayListItem) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
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
    borderColor: "#ffb60c",
    borderRadius: 20,
  },
  text: {
    color: "#b65a41",
      fontSize: 70,
    fontFamily: 'AmaticBold',
  },
});

export default DayListItem;

