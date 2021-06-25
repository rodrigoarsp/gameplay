import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";



export function GuildIcon(){
  const uri = 'https://www.clipartmax.com/png/middle/98-983652_discord-circle-discord-flat-icon.png'

  return(
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    
    />

  )
};