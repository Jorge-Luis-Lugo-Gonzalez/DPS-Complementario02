import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ParticipantList = ({ participants }) => {
  return (
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

    // sombra (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },

    // sombra (Android)
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
});