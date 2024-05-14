import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilScreen = () => {
  const [usuario, setUsuario] = useState(null);
  const [vacinasRecomendadas, setVacinasRecomendadas] = useState([]);

  useEffect(() => {
    const getUsuario = async () => {
      try {
        const userData = await AsyncStorage.getItem('usuario');
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setUsuario(parsedUserData);
          const vacinas = getRecomendacoesVacinas(parsedUserData);
          setVacinasRecomendadas(vacinas);
        }
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    getUsuario();
  }, []);

  const getRecomendacoesVacinas = (usuario) => {
    const { condicoesEspeciais, profissao } = usuario;

    const vacinasIdososSemCondicoes = [
      "Tetravalente (contra difteria, tétano, coqueluche e Haemophilus influenzae tipo b)",
      "Pneumocócica (para prevenir pneumonia e infecções pneumocócicas)",
      "Hepatite B",
      "Febre Amarela (especialmente se viver ou viajar para áreas endêmicas)",
      "Covid-19",
      "dTpa (reforço a cada 10 anos para difteria, tétano e coqueluche)",
      "Herpes Zoster (para prevenir o herpes zoster)",
      "SCR (Sarampo, Caxumba e Rubéola)",
      "Dupla Bacteriana (difteria e tétano)",
    ];

    const vacinasDoencasCronicas = [
      ...vacinasIdososSemCondicoes,
      "Influenza (anual, a ser considerada conforme atualizações das vacinas disponíveis)",
    ];

    const vacinasImunossuprimidos = [
      ...vacinasIdososSemCondicoes,
      "Influenza (anual, a ser considerada conforme atualizações das vacinas disponíveis)",
    ];

    const vacinasDoencasNeurologicas = [
      ...vacinasIdososSemCondicoes,
      "Influenza (anual, a ser considerada conforme atualizações das vacinas disponíveis)",
    ];

    const vacinasProfissionaisSaude = [
      ...vacinasIdososSemCondicoes,
      "VSR (Vírus Sincicial Respiratório) (especialmente se trabalhar com crianças ou idosos)",
    ];

    const vacinasProfissionaisSetorAlimentos = vacinasIdososSemCondicoes;

    const vacinasProfissionaisLimpeza = vacinasIdososSemCondicoes;

    if (condicoesEspeciais === 'Nenhuma' && profissao === 'Outra') {
      return vacinasIdososSemCondicoes;
    } else if (condicoesEspeciais === 'Doenças Crônicas') {
      return vacinasDoencasCronicas;
    } else if (condicoesEspeciais === 'Imunossupressão') {
      return vacinasImunossuprimidos;
    } else if (condicoesEspeciais === 'Doenças Neurológicas') {
      return vacinasDoencasNeurologicas;
    } else if (profissao === 'Profissionais de Saúde') {
      return vacinasProfissionaisSaude;
    } else if (profissao === 'Profissionais do Setor de Alimentos') {
      return vacinasProfissionaisSetorAlimentos;
    } else if (profissao === 'Profissionais de Limpeza') {
      return vacinasProfissionaisLimpeza;
    } else {
      return [];
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      {usuario ? (
        <ScrollView contentContainerStyle={styles.infoContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{usuario.nome}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Data de Nascimento:</Text>
            <Text style={styles.value}>{usuario.dataNascimento}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.label}>CPF:</Text>
            <Text style={styles.value}>{usuario.cpf}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Sexo:</Text>
            <Text style={styles.value}>{usuario.sexo}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Condições Especiais:</Text>
            <Text style={styles.value}>{usuario.condicoesEspeciais}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Profissão:</Text>
            <Text style={styles.value}>{usuario.profissao}</Text>
          </View>
          <Text style={styles.subtitle}>Recomendações de Vacinas:</Text>
          {vacinasRecomendadas.length > 0 ? (
            vacinasRecomendadas.map((vacina, index) => (
              <Text key={index} style={styles.vaccineItem}>- {vacina}</Text>
            ))
          ) : (
            <Text style={styles.noRecommendations}>Sem recomendações específicas.</Text>
          )}
        </ScrollView>
      ) : (
        <Text style={styles.loading}>Carregando dados do usuário...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    marginLeft: 10,
    color: '#777',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  vaccineItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  noRecommendations: {
    fontSize: 16,
    color: '#999',
  },
  loading: {
    fontSize: 18,
    color: '#999',
  },
});

export default PerfilScreen;
