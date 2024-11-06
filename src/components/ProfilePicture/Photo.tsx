import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './PhotoStyles'

export function Photo() {
  return (
    <View>
      <Image
      style={styles.containerPhoto} 
      source={require('../../../assets/perfilfoto.jpg')} />
    </View>
  );
}