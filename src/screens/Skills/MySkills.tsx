import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Photo } from '../../components/ProfilePicture/Photo';
import { styles } from './MySkillsStyles'

export default function MySkills() {
  return (
    <View style={styles.container}>
      <Photo/>

      <View style={styles.skillContainer}>

        <View style={styles.listContainer}> 
        <Text style={[styles.textContainer, {marginLeft: 50}]}>Minhas habilidades</Text>
        <Text style={styles.textContainer}>TS/JS:</Text>
        <Text style={styles.textContainer}>React:</Text>
        <Text style={styles.textContainer}>HTML:</Text>
        <Text style={styles.textContainer}>CSS:</Text>
        </View>

    </View>
    </View>
  );
}  