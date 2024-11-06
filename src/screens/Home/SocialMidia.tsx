import React from 'react';
import { View, TouchableOpacity, Linking, Text } from 'react-native';

import { styles } from './SocialMidiaStyles';

export default function SocialMidia() {

    const email = "devmachioni@gmail.com"

    const handlePressGit = () => {
      Linking.openURL('https://github.com/LucasMachioni')
    }
    const handlekPressLinkedIn = () => {
      Linking.openURL('https://www.linkedin.com/in/lucas-machioni-jorge-417154235/')
    }
  
    const handlePressGmail = () => {
      Linking.openURL(`mailto:${email}`)
    }
    
    const handlePressWhats = () => {
      Linking.openURL(`https://wa.me/qr/TZ4KPHJAPBESK1`)
    }

  return (
    <View style={styles.containerMidia}>

        <TouchableOpacity onPress={handlePressGit} style={styles.containerLinks}>
            <View> 
                <Text>GitHub</Text> 
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlekPressLinkedIn} style={styles.containerLinks}>
            <View> 
                <Text>LinkedIn</Text> 
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressWhats} style={styles.containerLinks}>
            <View> 
                <Text>WhatsApp</Text> 
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressGmail} style={styles.containerLinks}>
            <View> 
                <Text>Gmail</Text> 
            </View>
        </TouchableOpacity>

    </View>
  );
}