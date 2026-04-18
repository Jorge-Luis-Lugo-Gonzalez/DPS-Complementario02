import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputParticipant = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    onAdd(name);
    setName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre del participante"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Agregar" onPress={handleAdd} />
    </View>
  );
};

export default InputParticipant;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
});