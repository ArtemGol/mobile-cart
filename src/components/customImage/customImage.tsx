import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';

interface IProps {
  src: string;
  sizesStyles: Record<'width' | 'height', number>;
}

export const CustomImage = ({src, sizesStyles}: IProps) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <Image
      style={[styles.container, sizesStyles]}
      source={
        imageError ? require('../../../assets/plugs/noImage.png') : {uri: src}
      }
      onError={handleError}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 32,
  },
});
