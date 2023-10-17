import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ImageStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ContentLoader, { Rect, Circle, List, Facebook } from 'react-content-loader/native'

type ImageLoaderProps = {
  uri: string;
  style?: StyleProp<ImageStyle> | undefined;
  height: number;
  width: number;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ uri, style, height, width }) => {
  const [isLoading, setIsLoading] = useState(true);
  const empty = !uri;

  if (empty) {
    return (
      <View style={StyleSheet.flatten([style, styles.container, { height: height, width: width }])}>
        <MaterialCommunityIcons
          name="camera-off"
          size={40}
        />
      </View>
    );
  }

  const size = isLoading
    ? { height: 1, width: 1 }
    : { height: height, width: width };

  return (
    <>
      {isLoading &&
        <ContentLoader
          style={style}
          height={height}
          width={width}
          speed={0.5}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          {/*<Circle cx="75" cy="75" r="75"/>*/}
          <Rect x="10" y="10" rx="10" ry="10" height={height} width={width}/>
        </ContentLoader>
      }
      <Image
        source={{ uri: uri }}
        style={style}
        {...size}
        onLoad={async () => {
          await new Promise(r => setTimeout(r, 3000));
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
