import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onTermSubmit?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onTermSubmit, style }) => {
  const [localValue, setLocalValue] = useState(value || '');

  const hasValue = value !== undefined;
  return (
    <View style={StyleSheet.flatten([styles.containerStyle, style])}>
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
  clearStyle: {
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
  },
  containerStyle: {
    backgroundColor: '#d9d4d4',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 15,
    marginTop: 10
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
