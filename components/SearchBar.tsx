import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-100 rounded-full px-5 py-4">
      <Ionicons
        name="search-outline"
        size={20}
        color="#ab8bff"
        className="mx-2"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
