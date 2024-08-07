import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Screen2 = () => {
  const [number1, setNumber1] = useState<string>('');
  const [number2, setNumber2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const divideNumbers = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Por favor, ingrese números válidos.');
    } else if (num2 === 0) {
      setResult(num1 === 0 ? 'INDETERMINACIÓN' : 'NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult((num1 / num2).toFixed(2)); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de División</Text>
      <TextInput
        style={styles.input}
        placeholder="Campo 1"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Campo 2"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={divideNumbers}>
        <Text style={styles.buttonText}>Dividir</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aeeeee',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Screen2;
