import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    // height: 700,    
  },
  content: {  
    position: 'absolute',  
    marginTop: -0,    
    paddingHorizontal: 5
  },
  title: {
    color: '#030406',
    textAlign: 'left',
    fontSize: 60,
    marginBottom: 8,   
    fontFamily: theme.fonts.title700,
    lineHeight: 60 
  },
  subtitle: {
    color: '#2B4C8C',
    fontSize: 25,
    textAlign: 'left',
    marginBottom: 35,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
});