import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

    if (condicoesEspeciais === 'Nenhuma' && profissao === '') {
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
        <View style={styles.infoContainer}>
          <Text>Nome: {usuario.nome}</Text>
          <Text>Data de Nascimento: {usuario.dataNascimento}</Text>
          <Text>CPF: {usuario.cpf}</Text>
          <Text>Sexo: {usuario.sexo}</Text>
          <Text>Condições Especiais: {usuario.condicoesEspeciais}</Text>
          <Text>Profissão: {usuario.profissao}</Text>
          <Text style={styles.subtitle}>Recomendações de Vacinas:</Text>
          {vacinasRecomendadas.length > 0 ? (
            vacinasRecomendadas.map((vacina, index) => (
              <Text key={index}>- {vacina}</Text>
            ))
          ) : (
            <Text>Sem recomendações específicas.</Text>
          )}
        </View>
      ) : (
        <Text>Carregando dados do usuário...</Text>
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default PerfilScreen;
