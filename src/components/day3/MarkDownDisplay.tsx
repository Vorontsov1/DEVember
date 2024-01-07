import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Markdown from "react-native-markdown-display";



const MarkDownDisplay = ({children} : PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={styles.markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  },
});
export default MarkDownDisplay;
