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
    // height: 360,    
  },
  content: {  
    position: 'absolute',  
    marginTop: -0,    
    paddingHorizontal: 50
  },
  title: {
    color: '#DDE3F0',
    textAlign: 'left',
    fontSize: 40,
    marginBottom: 8,   
    fontFamily: theme.fonts.title700,
    lineHeight: 40 
  },
  subtitle: {
    color: '#DDE3F0',
    fontSize: 13,
    textAlign: 'left',
    marginBottom: 35,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
});