import { View, Text, StyleSheet, TextInput, Pressable,ScrollView } from "react-native";
import React, { useState } from "react";
import Markdown from "react-native-markdown-display";
import  MarkDownDisplay from "../../../components/day3/MarkDownDisplay";



const copy = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

### 🍔 Let's List Some Fun Things!

1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights

- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time

## 🌈 Advanced Fun

### 🖼 Adding Images and Links

A cute pic: 

![Cute Cat](https://media.istockphoto.com/id/530820200/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%B3%D0%B5%D1%80%D0%BE%D0%B9-%D0%B4%D1%96%D1%82%D0%B8-%D0%BF%D1%80%D0%B0%D0%B3%D0%BD%D0%B5%D0%BD%D0%BD%D1%8F-%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D0%B7%D1%96%D1%97-%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D0%B7%D1%96%D1%97-%D0%B3%D1%80%D0%B0%D0%B9%D0%BB%D0%B8%D0%B2%D0%B8%D0%B9-%D0%B2%D0%B5%D1%81%D0%B5%D0%BB%D0%BE-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D1%96%D1%8F.jpg?s=612x612&w=0&k=20&c=BO6vQh8xTodd5l3od1iPdwvbqjxuQ6_msAcbNxGh0Jk=)

Visit a [Google](https://google.com)

### 🎶 Code Block Party

\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`

## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊

> Enjoy crafting your own fun markdown documents! 🎨🎉

# Заголовок першого рівня

Це простий текст. *Цей текст нахиляється*, **а цей текст стає жирним**.

## Заголовок другого рівня

- Елемент списку 1
- Елемент списку 2
  - Під-елемент списку

[Посилання на Google](https://www.google.com)


`;


const EditorScreen = () => {
  return <MarkDownDisplay>{copy }</MarkDownDisplay>
};




const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  },
});
export default EditorScreen;
