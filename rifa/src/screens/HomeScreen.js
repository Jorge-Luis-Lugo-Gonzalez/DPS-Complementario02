import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputParticipant from '../components/InputParticipant';
import ParticipantList from '../components/ParticipantList';

const HomeScreen = () => {
  const [participants, setParticipants] = useState([]);

  const addParticipant = (name) => {
    if (!name.trim()) return;
    setParticipants([...participants, name]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rifa</Text>

      <InputParticipant onAdd={addParticipant} />

      <ParticipantList participants={participants} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});