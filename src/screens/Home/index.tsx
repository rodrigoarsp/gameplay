import React from 'react';
import { View } from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';

import { Profile } from '../../components/Profile';

import { styles } from './styles';
import { useState } from 'react';

export function Home(){
  const [category, setCategory] = useState('');

  function handlerCategorySelect (categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  return(
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        categorySelected = {category}
        setCategory={handlerCategorySelect}
        <CategorySelect
          categorySelected={category}
          setCategory={handlerCategorySelect}
        />
      </View>
    </View>
  );
}