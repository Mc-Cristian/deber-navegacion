import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Screen1 = ({ navigation }: any) => {
  return (
    <View style={styles.welcomeContainer}>   
      <Text style={styles.welcomeTitle}>Bienvenido</Text>
      
      <Image style={styles.imagen} source={require('../../assets/images/desarrollo-de-aplicaciones-moviles1.png')} />
      <Button
        title="Acceder"
        onPress={() => navigation.navigate('Screen2', { data: 'someData' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aeeeee', 
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 30, 
    color: '#333', 
  },
  button: {
    backgroundColor: '#007BFF', 
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagen :{
    width:300,
    height:300
  }
});

export default Screen1;
