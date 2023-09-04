import React, { useRef, useState, useEffect } from 'react';
// import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'expo-linear-gradient';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ImageStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient) as any;

type ShimmerImageProps = {
  uri: string;
  style?: StyleProp<ImageStyle> | undefined;
}

const ShimmerImage: React.FC<ShimmerImageProps> = ({ uri, style }) => {
  const [showChildComp, setShowChildComp] = useState(false);
  const imageRef = useRef<any>(null);
  const empty = !uri;

  useEffect(() => {
    if (empty) return;

    const animation = Animated.stagger(400, [imageRef.current?.getAnimated()]);
    Animated.loop(animation).start();
  }, [imageRef, empty]);

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
      <ShimmerPlaceHolder
        ref={imageRef}
        visible={showChildComp}
        style={style}
      >
        <Image
          source={{ uri: uri }}
          style={style}
          onLoad={() => {
            setShowChildComp(true);
          }}
        />
      </ShimmerPlaceHolder>
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

export default ShimmerImage;
