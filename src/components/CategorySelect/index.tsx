import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from "./styles";
import { categories } from "../../utils/categories";

import { Category } from '../Category';

type Props ={
  categorySelect: string;
}


export function CategorySelect({ categorySelect }: Props){
  return(
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, { paddingRight: 40 }]}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelect}
          />
        ))
      }
    </ScrollView>
  );
}