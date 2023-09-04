import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ImageStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ContentLoader, { Rect, List } from 'react-content-loader/native'

type ShimmerImageProps = {
  uri: string;
  style?: StyleProp<ImageStyle> | undefined;
}

const ImageLoader: React.FC<ShimmerImageProps> = ({ uri, style }) => {
  const [isLoading, setIsLoading] = useState(true);
  const empty = !uri;

  if (empty) {
    return (
      <View style={StyleSheet.flatten([style, styles.container])}>
        <MaterialCommunityIcons
          name="camera-off"
          size={40}
        />
      </View>
    );
  }

  return (
    <>
      {isLoading && <ContentLoader style={style}/>}
      <Image
        source={{ uri: uri }}
        style={isLoading ? { width: 1, height: 1 } : style}
        onLoad={async () => {
          // await new Promise(r => setTimeout(r, 3000));
          setIsLoading(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
  }
});

export default ImageLoader;
