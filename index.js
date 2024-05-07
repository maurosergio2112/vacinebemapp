import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const saveFormData = async () => {
    try {
      const formData = { /* Seus dados do formulário de vacinas ou do registro do usuário */ };
      await AsyncStorage.setItem('formData', JSON.stringify(formData));
      console.log('Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const retrieveFormData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('formData');
      const formData = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log('Dados recuperados:', formData);
    } catch (error) {
      console.error('Erro ao recuperar dados:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Salvar Dados" onPress={saveFormData} />
      <Button title="Recuperar Dados" onPress={retrieveFormData} />
    </View>
  );
};

export default App;