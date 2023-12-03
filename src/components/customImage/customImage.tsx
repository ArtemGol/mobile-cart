import React, {useState} from 'react';
import {Image} from 'react-native';

interface IProps {
  src: string;
  uniqStyles: Record<string, number>;
}

export const CustomImage = ({src, uniqStyles}: IProps) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <Image
      style={uniqStyles}
      source={
        imageError || !src.includes('http')
          ? require('../../../assets/plugs/noImage.png')
          : {uri: src}
      }
      onError={handleError}
    />
  );
};
