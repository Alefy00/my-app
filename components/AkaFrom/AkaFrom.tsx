import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import { styles } from './AkaFromStyle'
import LogoX from '../../assets/logo (3).png'

export function AkaFrom() {
  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}> 
        <Image style={styles.logo} source={LogoX}/>
        </View>
        <View style={styles.containerForm}>
          <View>
            <TextInput 
            style={styles.input}
            placeholder='Text'
            />
          </View>
          <View>
            <Text>Label</Text>
            <TextInput 
            style={styles.input}
            placeholder='Text'
            />
          </View>
          <View>
            <Text>This is your hint</Text>
            <TextInput 
            style={[styles.input, styles.inputText]}
            placeholder='Text'
            />
          </View>
          <View>
            <Text>Label</Text>
            <TextInput 
            style={[styles.input, styles.inputText]}
            placeholder='Text'
            />
          </View>
          <Text>This is your hint</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
        </View>
        <StatusBar 
     />
    </View>
  );
}