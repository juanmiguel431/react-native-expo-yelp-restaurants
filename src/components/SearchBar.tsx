import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SearchBarProps {
}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#d9d4d4',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});

export default SearchBar;
