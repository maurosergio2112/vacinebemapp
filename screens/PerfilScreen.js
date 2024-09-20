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
          parsedUserData.idade = calcularIdade(parsedUserData.dataNascimento);
          setUsuario(parsedUserData);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      }
    };

    getUsuario();
  }, []);

  useEffect(() => {
    if (usuario) {
      determinarVacinasRecomendadas(usuario);
    }
  }, [usuario]);

  const calcularIdade = (dataNascimento) => {
    const [dia, mes, ano] = dataNascimento.split('/');
    const nascimento = new Date(ano, mes - 1, dia);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesDiferenca = hoje.getMonth() - nascimento.getMonth();
    if (mesDiferenca < 0 || (mesDiferenca === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const determinarVacinasRecomendadas = (usuario) => {
    let vacinas = [];

    // Recomendações baseadas na profissão do usuário
    switch (usuario.profissao) {
      case 'Profissionais de Saúde':
        vacinas.push('Hepatite B', 'Influenza', 'Tríplice Viral (Sarampo, Caxumba, Rubéola)', 'Varicela', 'dTpa (Difteria, Tétano e Coqueluche)');
        break;
      case 'Profissionais do Setor de Alimentos e Bebidas':
        vacinas.push('Hepatite A', 'Tifoide', 'dT (Difteria e Tétano)');
        break;
      case 'Militares, Policiais e Bombeiros':
        vacinas.push('Febre Amarela', 'Hepatite B', 'Influenza', 'Meningite');
        break;
      case 'Profissionais que Lidam com Dejetos e Águas Contaminadas':
        vacinas.push('Hepatite A', 'Hepatite B', 'Febre Tifoide', 'Tétano');
        break;
      case 'Profissionais que Trabalham com Crianças':
        vacinas.push('Tríplice Viral (Sarampo, Caxumba, Rubéola)', 'Varicela', 'Coqueluche');
        break;
      case 'Profissionais que Entram em Contato com Animais':
        vacinas.push('Raiva', 'Tétano', 'Leptospirose');
        break;
      case 'Profissionais do Sexo':
        vacinas.push('Hepatite B', 'HPV', 'Meningite');
        break;
      case 'Profissionais Administrativos':
        vacinas.push('Influenza', 'Hepatite B', 'dT (Difteria e Tétano)');
        break;
      case 'Profissionais que Viajam com Frequência':
        vacinas.push('Febre Amarela', 'Hepatite A', 'Hepatite B');
        break;
      case 'Receptivos de Estrangeiros':
        vacinas.push('Hepatite A', 'Febre Amarela', 'Influenza');
        break;
      case 'Manicures, Pedicures, Podólogos e Tatuadores':
        vacinas.push('Hepatite B', 'Tétano');
        break;
      case 'Profissionais que Trabalham em Ambientes de Confinamento':
        vacinas.push('BCG (Tuberculose)', 'Meningite', 'Hepatite B');
        break;
      case 'Profissionais em Campos de Refugiados e Ajuda Humanitária':
        vacinas.push('Febre Amarela', 'Cólera', 'Hepatite A', 'Hepatite B');
        break;
      case 'Atletas Profissionais':
        vacinas.push('Influenza', 'Hepatite A', 'Hepatite B', 'Meningite');
        break;
      case 'Cuidadores':
        vacinas.push('Influenza', 'Tríplice Viral (Sarampo, Caxumba, Rubéola)', 'Hepatite B');
        break;
      default:
        break;
    }

    // Recomendações baseadas em condições especiais
    if (usuario.condicoesEspeciais) {
      usuario.condicoesEspeciais.forEach((condicao) => {
        switch (condicao) {
          case 'Doenças Crônicas':
            vacinas.push('Influenza', 'VPC13 (Pneumocócica 13-valente)', 'VPP23 (Pneumocócica 23-valente)', 'Hepatite B', 'Hepatite A', 'dTpa (Difteria, Tétano e Coqueluche)', 'Zóster', 'Febre Amarela');
            break;
          case 'Imunossupressão':
            vacinas.push('Influenza', 'VPC13 (Pneumocócica 13-valente)', 'VPP23 (Pneumocócica 23-valente)', 'Hepatite B', 'Meningocócica ACWY e B', 'Hepatite A', 'Zóster Recombinante', 'dTpa (Difteria, Tétano e Coqueluche)');
            break;
          case 'Doenças Neurológicas':
            vacinas.push('Influenza', 'VPC13 (Pneumocócica 13-valente)', 'VPP23 (Pneumocócica 23-valente)', 'dTpa (Difteria, Tétano e Coqueluche)', 'Meningocócica ACWY e B', 'Hepatite B', 'Zóster');
            break;
          default:
            break;
        }
      });
    }

    setVacinasRecomendadas(vacinas);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      {usuario ? (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.info}>{usuario.nome}</Text>

          <Text style={styles.label}>Idade:</Text>
          <Text style={styles.info}>{usuario.idade} anos</Text>

          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.info}>{usuario.cpf}</Text>

          <Text style={styles.label}>Sexo:</Text>
          <Text style={styles.info}>{usuario.sexo}</Text>

          <Text style={styles.label}>Condições Especiais:</Text>
          {usuario.condicoesEspeciais && usuario.condicoesEspeciais.length > 0 ? (
            usuario.condicoesEspeciais.map((condicao, index) => (
              <Text key={index} style={styles.info}>{condicao}</Text>
            ))
          ) : (
            <Text style={styles.info}>Nenhuma</Text>
          )}

          <Text style={styles.label}>Profissão:</Text>
          <Text style={styles.info}>{usuario.profissao}</Text>

          <Text style={styles.label}>Vacinas Recomendadas:</Text>
          {vacinasRecomendadas.length > 0 ? (
            vacinasRecomendadas.map((vacina, index) => (
              <Text key={index} style={styles.info}>{vacina}</Text>
            ))
          ) : (
            <Text style={styles.info}>Nenhuma recomendação específica</Text>
          )}
        </View>
      ) : (
        <Text style={styles.info}>Carregando dados do usuário...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PerfilScreen;
