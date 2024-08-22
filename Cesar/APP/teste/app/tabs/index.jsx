import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'black']}
        style={styles.background}
      />
      <Image
        source={require('../tabs/img/Nike-Logo.png')}
        style={{ width: 100, height: 100, }}
        resizeMode="contain"
      />
    </View>
  );


};


export default App;
