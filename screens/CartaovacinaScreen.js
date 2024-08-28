import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones de vacina

const CartaoVacinaScreen = () => {
  const [usuario, setUsuario] = useState(null);
  const [respostasSim, setRespostasSim] = useState([]);
  const [respostasNao, setRespostasNao] = useState([]);

  useEffect(() => {
    const getUsuario = async () => {
      try {
        const userData = await AsyncStorage.getItem('usuario');
        if (userData !== null) {
          setUsuario(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    const getRespostas = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('respostasQuestionario');
        if (jsonValue !== null) {
          const respostasDoQuestionario = JSON.parse(jsonValue);
          const respostasSim = [];
          const respostasNao = [];
          for (const key in respostasDoQuestionario) {
            if (respostasDoQuestionario[key] === true) {
              respostasSim.push(key);
            } else if (respostasDoQuestionario[key] === false) {
              respostasNao.push(key);
            }
          }
          setRespostasSim(respostasSim);
          setRespostasNao(respostasNao);
        }
      } catch (error) {
        console.error('Erro ao recuperar as respostas do questionário:', error);
      }
    };

    getUsuario();
    getRespostas();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {usuario && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Perfil do Vacinante</Text>
          <Text style={styles.userInfoText}>Nome: {usuario.nome}</Text>
          <Text style={styles.userInfoText}>Data de Nascimento: {usuario.dataNascimento}</Text>
          <Text style={styles.userInfoText}>CPF: {usuario.cpf}</Text>
          <Text style={styles.userInfoText}>Sexo: {usuario.sexo}</Text>
          <Text style={styles.userInfoText}>Condições Especiais: {usuario.condicoesEspeciais}</Text>
          <Text style={styles.userInfoText}>Profissão: {usuario.profissao}</Text>
        </View>
      )}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Vacinas Registradas</Text>
        <View style={styles.vaccineList}>
          {respostasSim.map((resposta, index) => (
            <View key={index} style={styles.vaccineItem}>
              <MaterialIcons name="check-circle" size={20} color="green" />
              <Text style={styles.vaccineText}>{resposta}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Vacinas Não Registradas</Text>
        <View style={styles.vaccineList}>
          {respostasNao.map((resposta, index) => (
            <View key={index} style={styles.vaccineItem}>
              <MaterialIcons name="cancel" size={20} color="red" />
              <Text style={styles.vaccineText}>{resposta}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  userInfoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  vaccineList: {
    marginTop: 10,
  },
  vaccineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  vaccineText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
});

export default CartaoVacinaScreen;
