import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



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
        // Recuperar as respostas do questionário do AsyncStorage
        const jsonValue = await AsyncStorage.getItem('respostasQuestionario');
        if (jsonValue !== null) {
          const respostasDoQuestionario = JSON.parse(jsonValue);
          // Separar as respostas marcadas como sim e não
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
    <View style={styles.container}>
      {usuario && (
        <View style={styles.userInfo}>
          <Text style={styles.sectionTitle}>Perfil do Vacinante:</Text>
          <Text style={styles.userInfoText}>Nome: {usuario.nome}</Text>
          <Text style={styles.userInfoText}>Data de Nascimento: {usuario.dataNascimento}</Text>
          <Text style={styles.userInfoText}>CPF: {usuario.cpf}</Text>
          <Text style={styles.userInfoText}>Sexo: {usuario.sexo}</Text>
          <Text style={styles.userInfoText}>Condições Especiais: {usuario.condicoesEspeciais}</Text>
          <Text style={styles.userInfoText}>Profissão: {usuario.profissao}</Text>
        </View>
      )}
      <Text style={styles.sectionTitle}>Vacinas registradas:</Text>
      <View style={styles.vaccineList}>
        {respostasSim.map((resposta, index) => (
          <Text key={index} style={styles.vaccineItem}>{resposta}</Text>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Vacinas que não foram registradas:</Text>
      <View style={styles.vaccineList}>
        {respostasNao.map((resposta, index) => (
          <Text key={index} style={styles.vaccineItem}>{resposta}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  userInfoText: {
    marginBottom: 5,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vaccineList: {
    marginBottom: 20,
  },
  vaccineItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CartaoVacinaScreen;