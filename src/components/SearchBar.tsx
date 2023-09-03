import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onTermSubmit?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onTermSubmit }) => {
  const [localValue, setLocalValue] = useState(value || '');

  const hasValue = value !== undefined;
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={hasValue ? value : localValue}
        onChangeText={term => {
          setLocalValue(term);
          onChange && onChange(term);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={e => {
          onTermSubmit && onTermSubmit(e.nativeEvent.text)
        }}
      />
      {localValue ? (
        <TouchableOpacity
          style={styles.clearStyle}
          onPress={() => {
            if (hasValue) {
              if (onChange) {
                setLocalValue('');
                onChange('');
              }
            } else {
              setLocalValue('');
              onChange && onChange('');
            }
          }}
        >
          <Feather name="x-circle" size={30}/>
        </TouchableOpacity>
      ) : null}
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#d9d4d4',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 15,
    marginTop: 10
  },
  clearStyle: {
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 15
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    // flex: 1,
    fontSize: 18,
    paddingEnd: 55,
    paddingLeft: 55,
    ...StyleSheet.absoluteFillObject,
  },
});

export default SearchBar;
