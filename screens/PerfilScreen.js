import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const PerfilScreen = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const getUsuario = async () => {
      try {
        const userData = await AsyncStorage.getItem('usuario');
        if (userData) {
          setUsuario(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    getUsuario();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil do Usuário</Text>
      {usuario && (
        <View>
          <Text>Nome: {usuario.nome}</Text>
          <Text>Data de Nascimento: {usuario.dataNascimento}</Text>
          <Text>CPF: {usuario.cpf}</Text>
          <Text>Sexo: {usuario.sexo}</Text>
          <Text>Condições Especiais: {usuario.condicoesEspeciais}</Text>
          <Text>Profissão: {usuario.profissao}</Text>
        </View>
      )}
    </View>
  );
};

export default PerfilScreen;