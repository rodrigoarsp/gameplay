import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from "./styles";
import { categories } from "../../utils/categories";

import { Category } from '../Category';

type Props ={
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasChackBox?: boolean;
}


export function CategorySelect({
  categorySelected,
  setCategory,
  hasChackBox = false,
}: Props){
  return(
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, { paddingRight: 40 }]}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress = {() => setCategory(category.id)}
            hasChackBox={hasChackBox}
            
          />
        ))
      }
    </ScrollView>
  );
}