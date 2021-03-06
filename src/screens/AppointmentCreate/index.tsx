import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { 
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';


import { CategorySelect } from '../../components/CategorySelect';
import { SmallInput } from '../../components/SmallInput';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';


export function AppointmentCreate(){
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handlerOpenGuilds(){
    setOpenGuildsModal(true);
  }
  
  function handlerGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return(
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
       <Header
          title="Agendar partida"
        />
      <ScrollView> 
       

        <Text style={[
          styles.label, 
          { marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
          Categoria
        </Text>

        <CategorySelect
          hasChackBox
          setCategory={setCategory}
          categorySelected={category}
        />
        <View style={styles.form}>
          <RectButton onPress={handlerOpenGuilds}>
            <View style={styles.select}>
              { 
                guild.icon 
                ? <GuildIcon /> 
                : <View style={styles.image}/>
                
              }
              
              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {
                    guild.name 
                    ? guild.name 
                    : 'Selecione um servidor'
                  }
                </Text>
              </View>

              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>
        <View style={styles.field}>
          <View>
            <Text style={styles.label}>
              Dia e m??s
            </Text>
            <View style={styles.column}>
              <SmallInput maxLength={2}/>
              <Text style={styles.divider}>
                /
              </Text>
              <SmallInput maxLength={2}/>
            </View>       
          </View>

          <View>
            <Text style={styles.label}>
              Hora e minuto
            </Text>
            <View style={styles.column}>
              <SmallInput maxLength={2}/>
              <Text style={styles.divider}>
                :
              </Text>
              <SmallInput maxLength={2}/>
            </View>
          </View>
          
        </View>
        <View style={[styles.field, {marginBottom: 12}]}>
          <Text style={styles.label}>
            Descri????o
          </Text>
          <Text style={styles.caracteresLimit}>
            Max 100 caracteres
          </Text>
        </View>
          <TextArea 
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <View style={styles.footer}>
            <Button title="Agendar"/>
           
          </View>
        </View>
      </ScrollView>
      
      <ModalView visible={openGuildsModal}>
        <Guilds handlerGuildSelect={handlerGuildSelect}/>
      </ModalView>

    </KeyboardAvoidingView>
  );
}