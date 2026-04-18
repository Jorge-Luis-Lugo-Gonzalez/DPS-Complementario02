import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';
import InputParticipant from '../components/InputParticipant';
import ParticipantList from '../components/ParticipantList';

const HomeScreen = () => {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  //  Agregar participante
  const addParticipant = (name) => {
    if (!name.trim()) return;
    setParticipants([...participants, name]);
  };

  //  Elegir ganador aleatorio
  const selectWinner = () => {
    if (participants.length === 0) return;

    const randomIndex = Math.floor(Math.random() * participants.length);
    const selected = participants[randomIndex];

    setWinner(selected);
    setModalVisible(true);
  };

  //  Reiniciar rifa
  const resetRaffle = () => {
    setParticipants([]);
    setWinner(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎟️ Rifa App</Text>

      <InputParticipant onAdd={addParticipant} />

      <ParticipantList
        participants={participants}
        onSelectWinner={selectWinner}
        onReset={resetRaffle}
      />

      {/*  MODAL GANADOR */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>🏆 Ganador</Text>

            <Text style={styles.winnerText}>
              {winner || ''}
            </Text>

            <Button
              title="Cerrar"
              onPress={() => setModalVisible(false)}
            />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  winnerText: {
    fontSize: 18,
    marginBottom: 20,
  },
});