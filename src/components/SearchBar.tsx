import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30}/>
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#d9d4d4',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1
  }
});

export default SearchBar;
