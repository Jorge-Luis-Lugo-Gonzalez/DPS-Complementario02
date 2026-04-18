import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const ParticipantList = ({ participants, onSelectWinner, onReset }) => {
  return (
    <View>
      <FlatList
        data={participants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.index}>{index + 1}.</Text>
            <Text style={styles.name}>{item}</Text>
          </View>
        )}
      />

      <View style={styles.buttons}>
        <Button title="Seleccionar ganador" onPress={onSelectWinner} />
        <Button title="Reiniciar rifa" onPress={onReset} color="red" />
      </View>
    </View>
  );
};

export default ParticipantList;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  index: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#555',
  },
  name: {
    fontSize: 16,
    color: '#333',
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});