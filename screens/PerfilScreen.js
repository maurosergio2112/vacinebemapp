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
    if (usuario.sexo === 'Feminino') {
      vacinas.push('Vacina contra o HPV');
    }
    if (usuario.idade >= 60) {
      vacinas.push('Vacina contra a gripe');
      vacinas.push('Vacina contra pneumonia');
    }
    if (usuario.condicoesEspeciais) {
      usuario.condicoesEspeciais.forEach((condicao) => {
        if (condicao === 'Doenças Crônicas' || condicao === 'Imunossupressão') {
          vacinas.push('Vacina contra hepatite B');
        }
        if (condicao === 'Doenças Neurológicas') {
          vacinas.push('Vacina contra meningite');
        }
      });
    }
    if (usuario.profissao) {
      if (usuario.profissao === 'Profissionais de Saúde') {
        vacinas.push('Vacina contra hepatite B');
        vacinas.push('Vacina contra a gripe');
      }
      if (usuario.profissao === 'Profissionais do Setor de Alimentos e Bebidas') {
        vacinas.push('Vacina contra hepatite A');
      }
      if (usuario.profissao === 'Militares, policiais e bombeiros') {
        vacinas.push('Vacina contra febre amarela');
        vacinas.push('Vacina contra tétano');
      }
      // Adicione outras condições baseadas em profissões conforme necessário
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
        <Text style={styles.info}>Carregando informações do usuário...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});

export default PerfilScreen;
