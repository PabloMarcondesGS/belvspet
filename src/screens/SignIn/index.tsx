import React from 'react';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { ButtonIcon2 } from '../../components/ButtonIcon2';

import { Background } from '../../components/Background';

export function SignIn(){
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    }catch (error) {
      Alert.alert(error);
    }
  }

  return(
    <Background>
      <View style={styles.container}>     
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          // resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Não perca as {'\n'}
            oportunidades {'\n'} 
          </Text>

          <Text style={styles.subtitle}>
            A 2FIT leva até você toda a comodidade de ter {'\n'} 
            as melhores academias disponíveis.
          </Text>

           {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon2
              title="Vamos Começar"
              // onPress={handleSignIn}
            />  
          }  

          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon 
              title="Facebook"
              onPress={handleSignIn}
            />  
          }  

        </View>
      </View>
    </Background>
  );
}