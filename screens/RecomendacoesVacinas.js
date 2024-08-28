import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecomendacoesDeVacinas = () => {
  const [recomendacoes, setRecomendacoes] = useState([]);

  useEffect(() => {
    const obterRecomendacoes = async () => {
      try {
        const usuarioJson = await AsyncStorage.getItem('usuario');
        if (usuarioJson) {
          const usuario = JSON.parse(usuarioJson);
          console.log('Dados do usuário:', usuario);
          
          const { profissao, condicoesEspeciais } = usuario;
          const vacinas = calcularRecomendacoes(profissao, condicoesEspeciais);
          setRecomendacoes(vacinas);
        } else {
          console.log('Nenhum dado de usuário encontrado');
        }
      } catch (error) {
        console.error('Erro ao obter as recomendações de vacinas', error);
      }
    };
    obterRecomendacoes();
  }, []);

  const calcularRecomendacoes = (profissao, condicoesEspeciais) => {
    let vacinas = [];

    // (Mantendo a lógica original de adicionar vacinas conforme a profissão e condições especiais)

    return vacinas;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Recomendações de Vacinas</Text>
      <View style={styles.recommendationContainer}>
        {recomendacoes.length > 0 ? (
          recomendacoes.map((vacina, index) => (
            <View key={index} style={styles.vaccineItem}>
              <Text style={styles.vaccineText}>{vacina}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.loadingText}>Carregando recomendações...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  recommendationContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  vaccineItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  vaccineText: {
    fontSize: 18,
    color: "#555",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    color: "#999",
  },
});

export default RecomendacoesDeVacinas;
