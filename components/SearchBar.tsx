import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-2">
      <Ionicons
        name="search-outline"
        size={20}
        color="#ab8bff"
        className="mx-2"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;

// api token=   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjQ1ZDgzMThlMzkyNjc0NDU2OTk0ZjI5MmZlNDM3OSIsIm5iZiI6MTc2MTcyMTEwMS43MDIwMDAxLCJzdWIiOiI2OTAxYmIwZDgyNmJkYjg3MjhiNjRjNTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RWzXW2MRZfGosuvlkyoNNQhywVGSCYatmWjZ-UeV2-4

// b645d8318e392674456994f292fe4379
