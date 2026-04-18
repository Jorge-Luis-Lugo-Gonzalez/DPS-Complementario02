import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';
import InputParticipant from '../components/InputParticipant';
import ParticipantList from '../components/ParticipantList';

const HomeScreen = () => {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addParticipant = (name) => {
    if (!name.trim()) return;
    setParticipants([...participants, name]);
  };

  const selectWinner = () => {
    if (participants.length === 0) return;
    const randomIndex = Math.floor(Math.random() * participants.length);
    setWinner(participants[randomIndex]);
    setModalVisible(true);
  };

  const resetRaffle = () => {
    setParticipants([]);
    setWinner(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rifa</Text>

      <InputParticipant onAdd={addParticipant} />

      <ParticipantList
        participants={participants}
        onSelectWinner={selectWinner}
        onReset={resetRaffle}
      />

      {/* Modal para mostrar el ganador */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¡Ganador!</Text>
            <Text style={styles.modalWinner}>{winner}</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalWinner: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
});