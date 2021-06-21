import React, { useState } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";

import IllustrationImg from '../../assets/Illustration.png';
import { styles } from './styles';

export function SignIn(){
  const [text, setText] = useState('');

  return(
    <View style={styles.container}>
      
      <Image source={IllustrationImg} />

    </View>
  );
}