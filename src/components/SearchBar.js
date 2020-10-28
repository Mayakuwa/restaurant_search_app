import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={style.backgroundStyle}>
      <FontAwesome
        name="search"
        size={20}
        color="black"
        style={style.iconStyle}
      />
      <TextInput
        style={style.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    flexDirection: "row",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 25,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
