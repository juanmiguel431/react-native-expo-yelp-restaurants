import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#d9d4d4',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    // flex: 1,
    fontSize: 18,

    paddingLeft: 55,
    ...StyleSheet.absoluteFillObject,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
