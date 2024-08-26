import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const BalanceDisplay = ({ balance }) => {
  return (
    <View style={styles.balanceContainer}>
        <Image 
            source={require('./santander.png')}
            style={styles.logo}
            resizeMode="contain"
        />
      <Text style={styles.balanceText}>Saldo Atual:</Text>
      <Text style={styles.balanceAmount}>R$ {balance.toFixed(2)}</Text>
    </View>
  );
};

const TransactionInput = ({ onDeposit, onWithdraw }) => {
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onDeposit(value);
      setAmount('');
    }
  };

  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onWithdraw(value);
      setAmount('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={styles.buttonContainer}>
        <Button title="Depositar" onPress={handleDeposit} />
        <Button title="Sacar" onPress={handleWithdraw} />
      </View>
    </View>
  );
};

const App = () => {
  const [balance, setBalance] = useState(7320.92);

  const handleDeposit = (amount) => {
    const bonus = amount * 0.01;
    setBalance((prevBalance) => prevBalance + amount + bonus);
  };

  const handleWithdraw = (amount) => {
    const penalty = (balance - amount) * 0.025;
    setBalance((prevBalance) => prevBalance - amount - penalty);
  };

  return (
    <View style={styles.container}>
      <BalanceDisplay balance={balance} />
      <TransactionInput onDeposit={handleDeposit} onWithdraw={handleWithdraw} />
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
});

export default App;
