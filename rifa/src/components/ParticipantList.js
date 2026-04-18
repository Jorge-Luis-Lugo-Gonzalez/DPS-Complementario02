import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Pressable } from 'react-native';

//  colores llamativos
const colors = ['#ff8a80', '#80d8ff', '#a7ffeb', '#ffd180', '#d1c4e9'];

const ParticipantList = ({ participants, onSelectWinner, onReset }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={participants}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No hay participantes aún
          </Text>
        }
        renderItem={({ item, index }) => {
          const bg = colors[index % colors.length];

          return (
            <Pressable
              style={({ pressed }) => [
                styles.card,
                { backgroundColor: bg },
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.text}>
                {index + 1}. {item}
              </Text>
            </Pressable>
          );
        }}
      />

      <View style={styles.buttons}>
        <Button title="Seleccionar ganador" onPress={onSelectWinner} />
        <Button title="Reiniciar" onPress={onReset} color="red" />
      </View>
    </View>
  );
};

export default ParticipantList;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.7,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});