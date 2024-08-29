import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Modal, Pressable } from 'react-native';

const App = () => {
  const [balance, setBalance] = useState(7320.92);
  const [amount, setAmount] = useState('');
  const [modalDepositarVisible, setModalDepositarVisible] = useState(false);
  const [modalSacarVisible, setModalSacarVisible] = useState(false);

  const depositar = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      const bonus = value * 0.01;
      setBalance((prevBalance) => prevBalance + value + bonus);
      setModalDepositarVisible(false);
      setAmount('');
    }
  };

  const sacar = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      const penalty = value * 0.025;
      if (balance >= value + penalty) {
        setBalance((prevBalance) => prevBalance - value - penalty);
      } else {
        alert("Saldo insuficiente para realizar o saque com a penalidade.");
      }
      setModalSacarVisible(false);
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Image source={require('./santander.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.balanceText}>Saldo Atual:</Text>
        <Text style={styles.balanceAmount}>R$ {balance.toFixed(2)}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={amount}
          onChangeText={setAmount}
        />
        <View style={styles.buttonContainer}>
          <Button title="Depositar" onPress={() => setModalDepositarVisible(true)} />
          <Button title="Sacar" onPress={() => setModalSacarVisible(true)} />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSacarVisible}
        onRequestClose={() => setModalSacarVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirme a retirada</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={sacar}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalSacarVisible(false)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDepositarVisible}
        onRequestClose={() => setModalDepositarVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirme o depósito</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={depositar}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalDepositarVisible(false)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  balanceContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: 32,
    color: 'green',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
