import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { Photo } from '../../components/ProfilePicture/Photo'

import { styles } from './HomeStyles';
import  SocialMidia  from './SocialMidia';

export default function HomeScreen({ navigation}: any) {
  
  function navToSkills() {
    navigation.navigate('skills')
  }

  return (
    <View style={styleInitial.container}>
    <View style={styles.container}>
      <Photo /> 

      <View style={styles.textContainer}>
      <Text style={styles.text}>Lucas Machioni</Text>
      </View>

      <SocialMidia />
      <TouchableOpacity onPress={navToSkills} style={styleInitial.containerNav}>
            <View> 
                <Text>MY SKILLS</Text> 
            </View>
        </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
    </View>
  );
}

import { StyleSheet } from 'react-native';
const styleInitial = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1111',
    alignItems: 'center',
    justifyContent: 'center',
  },
    containerNav: {
      backgroundColor: '#06ffa0',
      position: 'absolute',
      top: 600,
      width: 150,
      height: 45,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 10,
    }
  });